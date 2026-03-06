
import Image from 'next/image';
import { classCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ClassCategories() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-headline uppercase text-primary">
                        Discover Our Class Categories
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        From high-intensity training to mindful yoga, find the perfect class to match your fitness goals and style.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {classCategories.map((category) => {
                        const image = PlaceHolderImages.find(img => img.id === category.imageId);
                        return (
                            <div key={category.name} className="group relative rounded-lg overflow-hidden h-96">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        data-ai-hint={image.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                                <div className="relative h-full flex flex-col justify-end p-6 text-primary-foreground">
                                    <h3 className="text-2xl font-headline uppercase">{category.name}</h3>
                                    <p className="text-sm text-primary-foreground/80 mt-2 h-10">{category.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
