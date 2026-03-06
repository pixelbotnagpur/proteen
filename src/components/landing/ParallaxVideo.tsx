'use client';

import { PlaceHolderVideos } from "@/lib/placeholder-images";

const parallaxVideo = PlaceHolderVideos.find(v => v.id === 'parallax-video');

export function ParallaxVideo() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          src={parallaxVideo?.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      <div className="absolute inset-0 bg-black/60 z-0" />
    </div>
  );
}
