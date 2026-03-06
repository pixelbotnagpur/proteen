import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const communityImage = PlaceHolderImages.find((img) => img.id === 'community-1');

export function Community() {
    const features = [
        { title: 'EXPERT COACHING', description: 'Trainers who are passionate about your progress.' },
        { title: 'RESULTS-DRIVEN PROGRAMS', description: 'Workouts that deliver tangible, measurable results.' },
        { title: 'A SUPPORTIVE TRIBE', description: 'A community that pushes you to be your best.' },
    ];

    return (
        <section className="bg-secondary py-16 md:py-20">
            <div className="container mx-auto px-8">
                <div className="text-left mb-12">
                     <h2 className="text-3xl md:text-7xl font-bold font-headline uppercase">
                        Join The <span className="text-accent">Community</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div>
                        <h3 className="text-2xl md:text-4xl font-bold font-headline uppercase">Discover Your Potential</h3>
                        <div className="mt-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="py-6 border-b border-primary/50">
                                    <h4 className="text-xl font-bold font-headline">{feature.title}</h4>
                                    <p className="text-card-foreground/80 mt-2">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <Button size="lg" asChild className="mt-8 px-12 py-4 h-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase rounded-full">
                            <Link href="/classes">VIEW CLASSES</Link>
                        </Button>
                    </div>
                    <div className="min-h-[400px]">
                        {communityImage && (
                            <Image
                                src={communityImage.imageUrl}
                                alt={communityImage.description}
                                width={800}
                                height={1000}
                                className="object-cover w-full h-full max-h-[700px]"
                                data-ai-hint={communityImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
