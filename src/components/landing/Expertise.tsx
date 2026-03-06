import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { expertiseCards } from '@/lib/data';

export function Expertise() {
    return (
        <section className="bg-background py-16 md:py-20">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {expertiseCards.map((card) => {
                        const image = PlaceHolderImages.find((img) => img.id === card.id);
                        return (
                            <Link key={card.id} href={card.href} className="group relative h-[60vh] md:h-[80vh] text-white overflow-hidden flex-1 transition-all duration-700 ease-in-out md:hover:flex-[1.2] rounded-lg">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        data-ai-hint={image.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/40" />

                                <div className="relative flex flex-col justify-between h-full p-8">
                                    <h3 className="text-3xl md:text-4xl font-bold font-headline uppercase">{card.title}</h3>
                                    <div className="overflow-hidden">
                                        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                            <p className="max-w-md text-base md:text-lg">{card.description}</p>
                                            <div className="inline-block mt-4 text-accent font-bold uppercase tracking-wider">
                                                Read More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
