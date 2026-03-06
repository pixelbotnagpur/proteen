'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { JoinCta } from '@/components/landing/JoinCta';
import { Hero } from './book-a-workout/hero';
import { Schedule } from './book-a-workout/schedule';

export function BookAWorkoutPage() {
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
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="relative z-10 mt-[60vh] bg-secondary">
            <Schedule />
        </div>
        <JoinCta />
      </main>
      <Footer />
    </div>
  );
}
