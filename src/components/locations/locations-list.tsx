'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const locationImage = PlaceHolderImages.find((img) => img.id === 'location-amsterdam');

export function LocationsList() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-stretch bg-background rounded-lg overflow-hidden">
          <div className="relative min-h-[400px] md:min-h-[600px]">
            {locationImage && (
              <Image
                src={locationImage.imageUrl}
                alt={locationImage.description}
                fill
                className="object-cover"
                data-ai-hint={locationImage.imageHint}
              />
            )}
          </div>
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-xl font-headline uppercase text-foreground mb-4">
              DOWNTOWN LOCATION
            </h2>
            <p className="text-muted-foreground">
              123 Fitness Avenue
              <br />
              Workout City, 90210
            </p>

            <div className="mt-8 space-y-2 text-muted-foreground">
                <p><a href="mailto:info@proteen.com" className="hover:text-primary">info@proteen.com</a></p>
                <p><a href="#" className="hover:text-primary">WhatsApp</a></p>
                <p>(123) 456-7890</p>
            </div>
            
            <div className="mt-8">
                <h3 className="font-bold text-foreground">Opening hours</h3>
                <p className="text-muted-foreground mt-2">
                    Monday till Thursday: 07:00 - 21:30<br/>
                    Friday: 07:00 - 19:30<br/>
                    Saturday: 07:30 - 17:30<br/>
                    Sunday: 08:30 - 17:30
                </p>
            </div>

            <Button size="lg" asChild className="mt-8 px-8 py-3 h-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-widest uppercase rounded-md max-w-xs">
                <a href="https://www.google.com/maps/search/?api=1&query=123+Fitness+Avenue%2C+Workout+City%2C+90210" target="_blank" rel="noopener noreferrer">GOOGLE MAPS</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
