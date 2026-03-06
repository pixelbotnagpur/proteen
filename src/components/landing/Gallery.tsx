import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImageIds = [
    { id: 'gallery-1', className: 'md:col-span-2 row-span-2' },
    { id: 'gallery-2', className: '' },
    { id: 'gallery-3', className: '' },
    { id: 'gallery-4', className: '' },
    { id: 'gallery-5', className: 'md:col-span-2' },
];

export function Gallery() {
  const images = galleryImageIds.map(item => {
      const imageData = PlaceHolderImages.find(img => img.id === item.id);
      return {
          ...item,
          ...imageData
      };
  });

  return (
    <section id="gallery" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-8">
        <h2 className="text-center text-4xl md:text-7xl font-bold font-headline uppercase mb-12">
          Inside <span className="text-primary">Proteen</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[250px] gap-2 md:gap-4">
          {images.map((image) => {
            if (!image.imageUrl) return null;
            return (
              <div key={image.id} className={`${image.className} rounded-lg overflow-hidden group relative`}>
                <Image
                  src={image.imageUrl}
                  alt={image.description || 'Gallery image'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint || ''}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
