'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const storyImage = PlaceHolderImages.find((img) => img.id === 'our-story-image');

export function OurStorySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="min-h-[400px]">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={800}
                height={1000}
                className="object-cover w-full h-full max-h-[600px] rounded-lg"
                data-ai-hint={storyImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
              OUR STORY
            </h2>
            <p className="text-muted-foreground">
              Proteen Fitness was born from a simple idea: to create a fitness space that inspires and motivates. A place where cutting-edge equipment meets a supportive community, and where every member feels empowered to push their limits. We started in a small garage, driven by a passion for fitness and a desire to build something different.
            </p>
            <p className="text-muted-foreground mt-4">
              Today, we've grown into a premier fitness destination, but our core values remain the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
