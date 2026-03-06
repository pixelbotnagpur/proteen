
'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getNotificationSuggestion } from '@/app/actions';
import { members } from '@/lib/data';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Bot, Loader2, Send } from 'lucide-react';

const customNotificationSchema = z.object({
  recipient: z.string().min(1, 'Please select a recipient.'),
  subject: z.string().min(1, 'Subject is required.'),
  message: z.string().min(1, 'Message is required.'),
});

const aiNotificationSchema = z.object({
  context: z.string().min(1, 'Context is required.'),
  content: z.string().min(1, 'Content is required.'),
});

export default function NotificationsPage() {
    const { toast } = useToast();
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [aiSuggestion, setAiSuggestion] = useState<any>(null);

    const customForm = useForm({
        resolver: zodResolver(customNotificationSchema),
        defaultValues: { recipient: 'all', subject: '', message: '' },
    });

    const aiForm = useForm({
        resolver: zodResolver(aiNotificationSchema),
        defaultValues: { context: '', content: '' },
    });

    const onCustomSubmit = (data: z.infer<typeof customNotificationSchema>) => {
        toast({
            title: "Notification Sent!",
            description: `Message sent to ${data.recipient}.`,
        });
        customForm.reset();
    };

    const onAiSubmit = async (data: z.infer<typeof aiNotificationSchema>) => {
        setIsAiLoading(true);
        setAiSuggestion(null);
        const result = await getNotificationSuggestion({ 
            memberPreferences: 'Prefers email for non-urgent and SMS for urgent matters.', 
            ...data 
        });
        setIsAiLoading(false);

        if (result.error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error,
            });
        } else {
            setAiSuggestion(result);
        }
    };
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl tracking-tight">Notifications</h1>

      <Tabs defaultValue="custom">
        <TabsList>
          <TabsTrigger value="custom">Send Custom</TabsTrigger>
          <TabsTrigger value="ai">AI Assistant</TabsTrigger>
        </TabsList>

        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>Custom Notification</CardTitle>
              <CardDescription>Send a message to a specific member, group, or all members.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...customForm}>
                <form onSubmit={customForm.handleSubmit(onCustomSubmit)} className="space-y-6">
                  <FormField
                    control={customForm.control}
                    name="recipient"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recipient</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select recipients" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="all">All Members</SelectItem>
                            <SelectItem value="group-pro">Pro Members</SelectItem>
                            <SelectItem value="group-elite">Elite Members</SelectItem>
                            {members.map(m => <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={customForm.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Upcoming Maintenance" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={customForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" /> Send Notification
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AI Notification Assistant</CardTitle>
                <CardDescription>Let AI determine the best way to send a notification based on context.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...aiForm}>
                  <form onSubmit={aiForm.handleSubmit(onAiSubmit)} className="space-y-6">
                    <FormField
                      control={aiForm.control}
                      name="context"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notification Context</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g., Payment due in 3 days, class cancelled tomorrow" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={aiForm.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Core Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g., Your $49 payment is due for Pro membership." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isAiLoading}>
                      {isAiLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
                      Get Suggestion
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>AI Suggestion</CardTitle>
                <CardDescription>The recommended notification based on your input.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                {isAiLoading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
                {!isAiLoading && !aiSuggestion && <p className="text-muted-foreground">Your suggestion will appear here.</p>}
                {aiSuggestion && (
                    <div className="space-y-4 w-full">
                        <div>
                            <h4 className="">Channel</h4>
                            <p className="text-sm bg-muted p-2 rounded-md">{aiSuggestion.channel}</p>
                        </div>
                        <div>
                            <h4 className="">Timing</h4>
                            <p className="text-sm bg-muted p-2 rounded-md">{aiSuggestion.timing}</p>
                        </div>
                         <div>
                            <h4 className="">Message</h4>
                            <div className="text-sm border p-3 rounded-md bg-muted leading-relaxed">{aiSuggestion.message}</div>
                        </div>
                        <Button className="w-full bg-accent hover:bg-accent/90">
                           <Send className="mr-2 h-4 w-4" /> Send this message
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
