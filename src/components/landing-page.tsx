'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Pricing } from '@/components/landing/Pricing';
import { Committed } from './landing/Committed';
import { Community } from './landing/Community';
import { PrimalTribeCta } from './landing/PrimalTribeCta';
import { ParallaxVideo } from './landing/ParallaxVideo';
import { Expertise } from './landing/Expertise';
import { Highlights } from './landing/Highlights';
import { Gallery } from './landing/Gallery';

export function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="text-foreground flex flex-col min-h-screen">
      <ParallaxVideo />
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="relative z-10 bg-background">
          <Committed />
          <Expertise />
          <Community />
          <Highlights />
          <Pricing />
          <Gallery />
          <PrimalTribeCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
