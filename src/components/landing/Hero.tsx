'use client';

import TrainHardSvg from './TrainHardSvg';

export function Hero() {
  return (
    <div>
      <section className="relative w-full h-[60vh] flex items-end justify-center text-center bg-secondary text-black mix-blend-screen overflow-hidden pb-8 backdrop-blur-md">
        <div className="relative z-10 container mx-auto px-8">
          <TrainHardSvg className="w-full h-auto" />
        </div>
      </section>
      <div className="sticky top-[70vh] container mx-auto px-8 mb-12">
        <p className="text-2xl sm:text-4xl font-bold tracking-widest text-primary-foreground leading-tight">
          Your peak performance
          <br />
          starts here.
        </p>
      </div>
      <section className="h-[60vh] relative z-10"></section>
    </div>
  );
}
