'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const premiumImage = PlaceHolderImages.find((img) => img.id === 'premium-membership');

export function PremiumMembershipSection() {
  return (
    <section className="pb-16 md:pb-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
              PREMIUM MEMBERSHIP
            </h2>
            <p className="text-muted-foreground">
              Our Premium membership grants you unlimited access to all clubs, a monthly Body Scan, waitlist priority, a free scoop of protein every visit (smoothie add-on), and a 25% in-club discount!
            </p>
            <p className="text-muted-foreground mt-4">
              Enjoy more premium perks:
            </p>
            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-body tracking-wider uppercase text-foreground hover:no-underline text-left">EXCLUSIVE PREMIUM CONCEPTS</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Exclusive access to our Premium concepts: Proteen Recovery, Proteen Reformer & Proteen Wellness!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-body tracking-wider uppercase text-foreground hover:no-underline text-left">BRING YOUR FRIENDS!</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                    Bring a friend for free once a month to share the Proteen Fitness experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-body tracking-wider uppercase text-foreground hover:no-underline text-left">BOOKING PRIORITY</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                    Get priority booking for all our classes and services, ensuring you never miss out.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="min-h-[400px] hidden md:block">
            {premiumImage && (
              <Image
                src={premiumImage.imageUrl}
                alt={premiumImage.description}
                width={800}
                height={1000}
                className="object-cover w-full h-full max-h-[600px] rounded-lg"
                data-ai-hint={premiumImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
