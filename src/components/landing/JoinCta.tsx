'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { EnquiryForm } from './EnquiryForm';

const fitnessFirstImage = PlaceHolderImages.find(
  (img) => img.id === 'fitness-first'
);

export function JoinCta() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 md:py-24 text-center text-white">
        {fitnessFirstImage && (
          <Image
            src={fitnessFirstImage.imageUrl}
            alt={fitnessFirstImage.description}
            fill
            className="object-cover z-0"
            data-ai-hint={fitnessFirstImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-8xl font-extrabold font-headline uppercase">
            Put your fitness
            <br /> first <span className="text-accent">today</span>
          </h2>
          <Button 
            className="mt-8 rounded-full bg-accent text-accent-foreground h-24 w-24 md:h-32 md:w-32 text-xl md:text-2xl font-bold font-headline hover:bg-accent/90"
            onClick={() => setIsEnquiryOpen(true)}
          >
            JOIN
          </Button>
        </div>
      </section>
      <EnquiryForm isOpen={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
}
