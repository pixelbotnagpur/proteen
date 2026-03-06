import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { teamMembers } from '@/lib/data';

export function TeamSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto text-center flex flex-col items-center">
                <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
                    MEET OUR TEAM
                </h2>
                <p className="max-w-3xl mx-auto text-sm text-muted-foreground mt-4 mb-16">
                    Our trainers are the heart of Proteen Fitness. They are certified professionals, passionate about helping you succeed and dedicated to your fitness journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {teamMembers.map((member) => {
                        const image = PlaceHolderImages.find(img => img.id === member.imageId);
                        return (
                            <div key={member.name} className="flex flex-col items-center text-center">
                                {image && (
                                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                                        <Image 
                                            src={image.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                                <p className="text-muted-foreground">{member.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
