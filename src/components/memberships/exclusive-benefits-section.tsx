import { exclusiveBenefits } from '@/lib/data';

export function ExclusiveBenefitsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto text-center flex flex-col items-center">
                <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
                    More Exclusive Benefits
                </h2>
                <p className="max-w-3xl mx-auto text-sm text-muted-foreground mt-4 mb-16">
                    Our Premium membership unlocks a world of exclusive benefits designed to elevate your fitness journey and provide a truly luxurious experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl w-full mx-auto">
                    {exclusiveBenefits.map((benefit) => (
                        <div key={benefit.title} className="bg-secondary p-8 rounded-lg">
                            <h3 className="font-headline tracking-wider uppercase mb-3 text-foreground">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground mt-4">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
