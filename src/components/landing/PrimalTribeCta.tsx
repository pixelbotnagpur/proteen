import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PrimalTribeCta() {
  return (
    <section className="py-20 md:py-32 bg-accent">
      <div className="container mx-auto px-8 text-center flex flex-col items-center text-accent-foreground">
        <p className="font-semibold text-accent-foreground/80 uppercase">What we believe in</p>
        <h2 className="mt-4 text-5xl md:text-7xl font-bold font-headline uppercase">
          Join the Primal Tribe
          <br />
          Today!
        </h2>
        <Button asChild size="lg" className="mt-8 rounded-full px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-widest uppercase">
          <Link href="#">Reserve Your Spot</Link>
        </Button>
      </div>
    </section>
  );
}
