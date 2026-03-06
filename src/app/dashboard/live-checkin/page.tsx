'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { recognizeMember } from '@/app/actions';
import { members } from '@/lib/data';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Loader2, UserCheck, UserX } from 'lucide-react';

export default function LiveCheckinPage() {
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recognizedMember, setRecognizedMember] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
        setHasCameraPermission(false);
        setError('Camera access was denied. Please enable camera permissions in your browser settings.');
      }
    };

    getCameraPermission();
    
    return () => {
        const stream = videoRef.current?.srcObject as MediaStream;
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    }
  }, []);

  const handleCapture = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsProcessing(true);
    setRecognizedMember(null);
    setError(null);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    if (context) {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const photoDataUri = canvas.toDataURL('image/jpeg');
        
        const result = await recognizeMember({ photoDataUri, members });
        
        if (result && "error" in result) {
            setError(result.error || 'Could not recognize the member. Please try again.');
            toast({
                variant: 'destructive',
                title: 'Recognition Failed',
                description: result.error || 'The member could not be identified.',
            });
        } else if (result && result.memberId) {
            const memberDetails = members.find(m => m.id === result.memberId);
            setRecognizedMember(memberDetails);
            toast({
                title: 'Check-in Successful!',
                description: `${memberDetails?.name} has been checked in.`,
            });
        } else {
            setError('Could not recognize the member. Please try again.');
            toast({
                variant: 'destructive',
                title: 'Recognition Failed',
                description: 'The member could not be identified.',
            });
        }
    }
    setIsProcessing(false);
  }, [toast]);


  return (
    <div className="space-y-8">
      <h1 className="text-3xl tracking-tight">Live Check-in</h1>
      <p className="text-muted-foreground">
        Use the camera to recognize and check-in members automatically.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Camera Feed</CardTitle>
            <CardDescription>Position the member's face within the frame.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                <canvas ref={canvasRef} className="hidden" />
                {hasCameraPermission === false && (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <Alert variant="destructive">
                            <Camera className="h-4 w-4" />
                            <AlertTitle>Camera Access Denied</AlertTitle>
                            <AlertDescription>
                            Please enable camera permissions in your browser settings to use this feature.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
                 {hasCameraPermission === null && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleCapture} disabled={isProcessing || !hasCameraPermission} className="w-full">
              {isProcessing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Camera className="mr-2 h-4 w-4" />
              )}
              Capture & Check-in
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Recognition Result</CardTitle>
            <CardDescription>The identified member will appear here.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center text-center">
                {isProcessing && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
                {!isProcessing && !recognizedMember && !error && (
                    <div className="text-muted-foreground">
                        <UserX className="mx-auto h-12 w-12" />
                        <p className="mt-4">Waiting for member recognition...</p>
                    </div>
                )}
                {error && (
                    <Alert variant="destructive">
                        <UserX className="h-4 w-4" />
                        <AlertTitle>Recognition Failed</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                {recognizedMember && (
                    <div className="flex flex-col items-center gap-4">
                        <UserCheck className="h-12 w-12 text-green-500" />
                        <h3 className="text-xl">Check-in Successful</h3>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={recognizedMember.avatar} alt={recognizedMember.name} />
                            <AvatarFallback>{recognizedMember.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-center">
                            <p className="text-lg">{recognizedMember.name}</p>
                            <p className="text-muted-foreground">{recognizedMember.email}</p>
                        </div>
                    </div>
                )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
