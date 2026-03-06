'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'jobs-hero-bg');

export function Hero() {
  return (
    <div className="fixed top-0 left-0 w-full h-[60vh] -z-10">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full container mx-auto px-8 flex flex-col items-start justify-end text-left text-primary-foreground pb-12 gap-2">
        <p className="text-xl font-body uppercase tracking-widest">
          Build With Us
        </p>
        <h1 className="text-3xl md:text-4xl font-bold font-headline uppercase">
          Careers at Proteen
        </h1>
      </div>
    </div>
  );
}
