'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/memberships/hero';
import { MembershipBenefitsSection } from './memberships/benefits-section';
import { ExclusiveBenefitsSection } from './memberships/exclusive-benefits-section';
import { PremiumMembershipSection } from './memberships/premium-membership-section';
import { Pricing } from '@/components/landing/Pricing';
import { JoinCta } from '@/components/landing/JoinCta';

export function MembershipsPage() {
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
          <MembershipBenefitsSection />
          <ExclusiveBenefitsSection />
          <PremiumMembershipSection />
          <Pricing />
        </div>
        <JoinCta />
      </main>
      <Footer />
    </div>
  );
}
