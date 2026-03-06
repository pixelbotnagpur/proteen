'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitEnquiry } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
    const { toast } = useToast();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
    });

    const { isSubmitting } = form.formState;

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const result = await submitEnquiry(data);
        if (result.success) {
            toast({
                title: "Message Sent!",
                description: "We've received your enquiry and will get back to you shortly.",
            });
            form.reset();
        } else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: result.message || "Could not send your message. Please try again.",
            });
        }
    };

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    <div className="bg-background p-8 md:p-12 rounded-lg">
                        <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Have a question, feedback, or a partnership proposal? We'd love to hear from you. Fill out the form or use the contact details below.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-foreground">VISIT US</h3>
                                <p className="text-muted-foreground mt-1">
                                    123 Fitness Avenue, Workout City, 90210
                                </p>
                            </div>
                             <div>
                                <h3 className="font-bold text-foreground">EMAIL US</h3>
                                <p className="text-muted-foreground mt-1">
                                    <Link href="mailto:info@proteen.com" className="hover:text-primary">info@proteen.com</Link>
                                </p>
                            </div>
                             <div>
                                <h3 className="font-bold text-foreground">CALL US</h3>
                                <p className="text-muted-foreground mt-1">
                                    (123) 456-7890
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-background p-8 md:p-12 rounded-lg">
                         <h2 className="text-2xl font-headline uppercase text-foreground mb-8 text-center">
                            Send a Message
                        </h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Your message..." rows={5} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
