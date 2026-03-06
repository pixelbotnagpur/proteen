import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits1Image = PlaceHolderImages.find((img) => img.id === 'benefits1');
const benefits2Image = PlaceHolderImages.find((img) => img.id === 'benefits2');
const benefits3Image = PlaceHolderImages.find((img) => img.id === 'benefits3');

export function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-7xl font-bold font-headline uppercase">
          Membership
          <br /> with <span className="text-primary">best benefits_</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {benefits1Image && (
            <Image
              src={benefits1Image.imageUrl}
              alt={benefits1Image.description}
              width={600}
              height={400}
              className="object-cover"
              data-ai-hint={benefits1Image.imageHint}
            />
          )}
          <div className="w-full h-64 bg-neutral-800 hidden md:block"></div>
          {benefits2Image && (
            <Image
              src={benefits2Image.imageUrl}
              alt={benefits2Image.description}
              width={600}
              height={400}
              className="object-cover"
              data-ai-hint={benefits2Image.imageHint}
            />
          )}
          <div className="w-full h-64 bg-neutral-800 hidden md:block"></div>
          {benefits3Image && (
            <Image
              src={benefits3Image.imageUrl}
              alt={benefits3Image.description}
              width={800}
              height={600}
              className="object-cover md:col-span-2"
              data-ai-hint={benefits3Image.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
