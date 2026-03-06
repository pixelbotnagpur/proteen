import { missionValues } from "@/lib/data";

export function OurMissionSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto text-center flex flex-col items-center">
                <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
                    OUR MISSION & VALUES
                </h2>
                <p className="max-w-3xl mx-auto text-sm text-muted-foreground mt-4 mb-16">
                    Our mission is to empower individuals to achieve their peak physical and mental potential. We are dedicated to providing a motivating and inclusive environment where everyone feels welcome and inspired to pursue a healthier, stronger life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl w-full mx-auto">
                    {missionValues.map((value) => (
                        <div key={value.title} className="bg-background p-8 rounded-lg">
                            <h3 className="font-headline tracking-wider uppercase mb-3 text-foreground">{value.title}</h3>
                            <p className="text-sm text-muted-foreground mt-4">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
