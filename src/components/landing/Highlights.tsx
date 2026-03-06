'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { highlights } from '@/lib/data';
import { useIsMobile } from '@/hooks/use-mobile';

function HighlightsMobile() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="space-y-16">
          {highlights.map((highlight, index) => {
            const image = PlaceHolderImages.find((img) => img.id === highlight.imageId);
            if (!image) return null;
            return (
              <div key={highlight.imageId} className="text-center">
                <div className="mb-6">
                  <span className="text-xs text-primary-foreground/50 tracking-widest">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold font-headline uppercase tracking-wider whitespace-pre-wrap text-accent">
                    {highlight.text}
                  </h3>
                </div>
                <div className="relative w-full aspect-video shadow-2xl overflow-hidden rounded-lg">
                  <Image
                    src={image.imageUrl}
                    alt={image.description || ''}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint || ''}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HighlightsDesktop() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${100 - 100 / highlights.length}%`]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-primary text-primary-foreground">
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden pt-8 md:pt-16">
        {/* Titles */}
        <div className="w-full container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {highlights.map((highlight, index) => {
              const totalItems = highlights.length;
              const start = index / totalItems;
              const end = (index + 1) / totalItems;
              const isLast = index === totalItems - 1;

              const opacity = useTransform(
                scrollYProgress,
                [start - 0.001, start, end - 0.001, end],
                [0.6, 1, 1, isLast ? 1 : 0.6]
              );

              const color = useTransform(
                scrollYProgress,
                [start - 0.001, start, end - 0.001, end],
                [
                  'hsl(var(--primary-foreground))',
                  'hsl(var(--accent))',
                  'hsl(var(--accent))',
                  isLast ? 'hsl(var(--accent))' : 'hsl(var(--primary-foreground))',
                ]
              );

              return (
                <motion.div
                  key={highlight.text}
                  style={{ opacity }}
                  className="text-center"
                >
                  <span className="text-xs text-primary-foreground/50 tracking-widest">
                    0{index + 1}
                  </span>
                  <motion.h3
                    style={{ color }}
                    className="mt-2 text-sm md:text-base font-bold font-headline uppercase tracking-wider whitespace-pre-wrap"
                  >
                    {highlight.text}
                  </motion.h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Horizontal Scrolling Images */}
        <div className="flex-1 w-full flex items-center">
            <motion.div style={{ x }} className="flex">
                {highlights.map((highlight) => {
                const image = PlaceHolderImages.find(
                    (img) => img.id === highlight.imageId
                );
                if (!image) return null;

                return (
                    <div key={highlight.imageId} className="relative w-screen h-[50vh] sm:h-[60vh] px-4 md:px-20">
                        <div className="relative w-full h-full shadow-2xl overflow-hidden rounded-lg">
                            <Image
                                src={image.imageUrl}
                                alt={image.description || ''}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint || ''}
                            />
                        </div>
                    </div>
                );
                })}
            </motion.div>
        </div>

      </div>
    </section>
  );
}

export function Highlights() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null;
  }

  return isMobile ? <HighlightsMobile /> : <HighlightsDesktop />;
}
