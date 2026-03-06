'use client';

import { PlaceHolderImages, PlaceHolderVideos } from '@/lib/placeholder-images';

const heroVideo = PlaceHolderVideos.find((v) => v.id === 'about-hero-video');
const posterImage = PlaceHolderImages.find((img) => img.id === 'about-hero-poster');

export function Hero() {
  return (
    <div className="fixed top-0 left-0 w-full h-[60vh] -z-10">
      {heroVideo && (
        <video
          src={heroVideo.videoUrl}
          poster={posterImage?.imageUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full container mx-auto px-8 flex flex-col items-start justify-end text-left text-primary-foreground pb-12 gap-2">
        <p className="text-xl font-body uppercase tracking-widest">
          About Proteen Fitness
        </p>
        <h1 className="text-3xl md:text-4xl font-bold font-headline uppercase">
          More Than a Gym
        </h1>
      </div>
    </div>
  );
}
