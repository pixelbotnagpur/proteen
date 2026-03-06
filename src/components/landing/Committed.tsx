'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Committed() {
  // 1. Keep the "For the Committed" title animation.
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: titleScrollYProgress } = useScroll({
    target: titleContainerRef,
    offset: ['start end', 'end start'],
  });
  const xTransform = useTransform(titleScrollYProgress, [0.1, 0.7], ['50%', '-50%']);

  // 3. On scroll behaviour, the description text will fade in word by word 
  const text = "Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.";
  const words = text.split(" ");
  const textAnimationContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: textScrollYProgress } = useScroll({
      target: textAnimationContainerRef,
      offset: ['start start', 'end end']
  });

  return (
    <section className="bg-primary text-primary-foreground">
        {/* Title Section */}
        <div ref={titleContainerRef} className="py-20 md:py-32">
          <div className="relative overflow-hidden">
            <motion.h2 
              style={{ x: xTransform }}
              className="text-5xl md:text-7xl font-bold font-headline uppercase whitespace-nowrap text-center"
            >
              For The <span className="text-accent">Committed</span>
            </motion.h2>
          </div>
        </div>

        {/* 2. Make a section right after the title. */}
        {/* 3. Make the section sticky. */}
        {/* 4. keep the section height 100vh. */}
        <div ref={textAnimationContainerRef} className="relative h-[200vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="max-w-3xl mx-auto p-8">
                    <p className="flex flex-wrap items-center justify-center text-3xl md:text-5xl leading-tight">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            // Fade from 0.1 to 1 for a smoother appearance
                            const opacity = useTransform(textScrollYProgress, [start, end], [0.1, 1]);
                            return (
                                <motion.span key={i} style={{ opacity }} className="pr-3">
                                    {word}
                                </motion.span>
                            )
                        })}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
