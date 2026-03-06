'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const whatToExpectImage = PlaceHolderImages.find((img) => img.id === 'what-to-expect-image');

export function WhatToExpectSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="min-h-[400px]">
            {whatToExpectImage && (
              <Image
                src={whatToExpectImage.imageUrl}
                alt={whatToExpectImage.description}
                width={800}
                height={1000}
                className="object-cover w-full h-full max-h-[600px] rounded-lg"
                data-ai-hint={whatToExpectImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
              What to Expect
            </h2>
            <p className="text-muted-foreground">
              Your first visit to Proteen Fitness is the beginning of an incredible journey. From the moment you walk in, our team is here to make you feel welcome and guide you every step of the way. We'll give you a tour of our state-of-the-art facilities, introduce you to our friendly staff, and help you get acquainted with everything we have to offer.
            </p>
            <p className="text-muted-foreground mt-4">
              No pressure, no intimidation—just a supportive environment to help you get started. We recommend arriving 15 minutes early to get settled in. Wear comfortable workout clothes and bring a water bottle. We've got the rest covered!
            </p>
             <Button asChild size="lg" className="mt-8 rounded-full px-12 py-4 bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase">
              <Link href="/pricing">Try Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

    
