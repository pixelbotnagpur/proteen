import { membershipBenefits } from '@/lib/data';

export function MembershipBenefitsSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto text-center flex flex-col items-center">
                <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
                    BECOME A MEMBER
                </h2>
                <p className="max-w-3xl mx-auto text-sm text-muted-foreground mt-4 mb-16">
                    At Proteen Fitness you define your line and we give you everything we've got to help you cross it. Discover the next-level fitness experience that refuses to cut corners when it comes to quality, atmosphere and vibe. Join our tribe now and enjoy your member benefits:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl w-full mx-auto">
                    {membershipBenefits.map((benefit) => (
                        <div key={benefit.title} className="bg-background p-8 rounded-lg">
                            <h3 className="font-headline tracking-wider uppercase mb-3 text-foreground">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground mt-4">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
