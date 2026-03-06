'use client';

import { termsAndConditionsContent } from "@/lib/data";
import { useEffect, useState } from "react";

export function TermsSection() {
    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
    }, [])

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-8 max-w-4xl">
                <article className="prose dark:prose-invert max-w-none">
                    <p className="text-muted-foreground">Last updated: {date}</p>
                    {termsAndConditionsContent.map((section, index) => (
                        <div key={index}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
}
