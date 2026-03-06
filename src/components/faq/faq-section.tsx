import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqItems } from "@/lib/data";
  
export function FaqSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-headline uppercase text-primary">
                        Your Questions, Answered
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Find answers to common questions about memberships, classes, and what to expect at Proteen Fitness.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                         <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-body tracking-wider uppercase text-foreground hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
