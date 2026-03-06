import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonusesImage = PlaceHolderImages.find((img) => img.id === 'bonuses');

export function Bonuses() {
  return (
    <section id="bonuses" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-7xl font-bold font-headline uppercase">
          Daily <span className="text-primary">Bonuses</span>
        </h2>
        <div className="mt-12 relative h-[300px] md:h-[500px]">
          {bonusesImage && (
            <Image
              src={bonusesImage.imageUrl}
              alt={bonusesImage.description}
              fill
              className="object-contain"
              data-ai-hint={bonusesImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
