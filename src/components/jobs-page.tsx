'use client';

import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { JoinCta } from '@/components/landing/JoinCta';
import { Hero } from './jobs/hero';
import { JobsSection } from './jobs/jobs-section';
import { EnquiryForm } from './landing/EnquiryForm';

export function JobsPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

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
          <JobsSection onApplyNowClick={() => setIsEnquiryOpen(true)} />
        </div>
        <JoinCta />
      </main>
      <Footer />
      <EnquiryForm isOpen={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </div>
  );
}
