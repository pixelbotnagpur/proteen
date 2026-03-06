'use client';

import { Sheet, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { submitEnquiry } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export function EnquiryForm({ isOpen, onOpenChange }: EnquiryFormProps) {
    const { toast } = useToast();
    const [formStep, setFormStep] = useState(1);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isEmailValid = (email: string) => {
        // A simple regex for email validation
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const handleContinue = () => {
        if (isEmailValid(email)) {
            setFormStep(2);
        }
    };
    
    const resetForm = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setMessage('');
        setAgreed(false);
        setFormStep(1);
        setIsSubmitting(false);
    };

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            // Reset form when it's closed.
            resetForm();
        }
        onOpenChange(open);
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isStep2FormValid) return;

        setIsSubmitting(true);
        const result = await submitEnquiry({ email, firstName, lastName, message });
        setIsSubmitting(false);

        if (result.success) {
            toast({
                title: "Enquiry Sent!",
                description: "We've received your message and will get back to you shortly.",
            });
            handleOpenChange(false);
        } else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: result.message || "Could not send your enquiry. Please try again.",
            });
        }
    };

    const isStep2FormValid = firstName && lastName && message && agreed;

    return (
        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
            <SheetContent side="right" className="bg-accent text-accent-foreground p-0 w-full md:max-w-[50vw] flex flex-col border-l-0">
                <div className="relative flex-1 flex flex-col justify-center items-center px-4 sm:px-8">
                    <SheetClose asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 left-4 sm:top-6 sm:left-6 h-12 w-12 rounded-full text-accent-foreground hover:bg-black/10"
                            aria-label="Close form"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                    </SheetClose>

                    {formStep === 1 ? (
                        <div className="w-full max-w-sm flex flex-col justify-center gap-24">
                            <SheetTitle className="text-4xl font-bold font-body text-accent-foreground text-left">Let's get started!</SheetTitle>
                            
                            <div className="grid w-full items-center gap-1.5 text-left">
                                <Label htmlFor="email" className="text-accent-foreground/70 uppercase tracking-widest text-xs px-1">Email Address</Label>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    placeholder="" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent border-0 border-b border-accent-foreground/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-accent-foreground px-1 text-lg h-12 text-accent-foreground"
                                />
                            </div>
                            <Button 
                                className="w-full rounded-full bg-transparent border border-accent-foreground text-accent-foreground h-12 text-md font-body tracking-widest hover:bg-accent-foreground hover:text-accent disabled:opacity-50"
                                disabled={!isEmailValid(email)}
                                onClick={handleContinue}
                            >
                                CONTINUE
                            </Button>
                        </div>
                    ) : (
                         <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col justify-center gap-8">
                            <div className="flex justify-between items-center text-left w-full">
                                <p className="text-accent-foreground/80">{email}</p>
                                <Button variant="link" className="p-0 h-auto text-accent-foreground/80 hover:text-accent-foreground underline" onClick={() => setFormStep(1)}>
                                    Edit
                                </Button>
                            </div>
                            
                            <div className="grid w-full items-center gap-6 text-left">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="firstName" className="text-accent-foreground/70 uppercase tracking-widest text-xs px-1">First Name</Label>
                                        <Input 
                                            type="text" 
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="bg-transparent border-0 border-b border-accent-foreground/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-accent-foreground px-1 text-lg h-12 text-accent-foreground"
                                        />
                                    </div>
                                     <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="lastName" className="text-accent-foreground/70 uppercase tracking-widest text-xs px-1">Last Name</Label>
                                        <Input 
                                            type="text" 
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="bg-transparent border-0 border-b border-accent-foreground/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-accent-foreground px-1 text-lg h-12 text-accent-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="message" className="text-accent-foreground/70 uppercase tracking-widest text-xs px-1">Message</Label>
                                    <Textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="bg-transparent border-0 border-b border-accent-foreground/50 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-accent-foreground px-1 text-lg text-accent-foreground min-h-[60px]"
                                        rows={2}
                                    />
                                </div>
                            </div>
                            
                             <div className="flex items-start space-x-3 text-left">
                                <Checkbox 
                                    id="terms" 
                                    checked={agreed}
                                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                                    className="border-accent-foreground/50 data-[state=checked]:bg-accent-foreground data-[state=checked]:text-accent mt-0.5"
                                />
                                <Label htmlFor="terms" className="text-xs text-accent-foreground/80 font-light leading-relaxed">
                                    I agree to our <a href="#" className="underline font-medium">terms & conditions</a>, <a href="#" className="underline font-medium">disclaimer</a> and <a href="#" className="underline font-medium">privacy policy</a>.
                                </Label>
                            </div>

                            <Button 
                                type="submit"
                                className="w-full rounded-full bg-transparent border border-accent-foreground text-accent-foreground h-12 text-md font-body tracking-widest hover:bg-accent-foreground hover:text-accent disabled:opacity-50"
                                disabled={!isStep2FormValid || isSubmitting}
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : 'SEND MESSAGE'}
                            </Button>
                        </form>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
