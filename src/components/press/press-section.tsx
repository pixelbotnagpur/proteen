import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { pressArticles, pressMentions } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function PressSection() {
    return (
        <>
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-2xl font-headline uppercase text-primary mb-4">
                        As Featured In
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
                        We are proud to have been featured in leading fitness and lifestyle publications.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-6">
                        {pressMentions.map(mention => {
                             const logo = PlaceHolderImages.find(img => img.id === mention.logoId);
                             return (
                                <Link key={mention.publication} href={mention.href} target="_blank" rel="noopener noreferrer" className="relative h-10 w-32 md:w-40 opacity-60 hover:opacity-100 transition-opacity">
                                    {logo && (
                                        <Image 
                                            src={logo.imageUrl}
                                            alt={`${mention.publication} logo`}
                                            fill
                                            className="object-contain"
                                            data-ai-hint={logo.imageHint}
                                        />
                                    )}
                                </Link>
                             )
                        })}
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-headline uppercase text-primary">
                        Latest Articles
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Read what the press is saying about our unique approach to fitness and community.
                    </p>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pressArticles.map((article, index) => {
                            const image = PlaceHolderImages.find(img => img.id === article.imageId);
                            return (
                                <Link href={article.href} key={index} className="group bg-secondary rounded-lg overflow-hidden flex flex-col">
                                    {image && (
                                        <div className="relative h-56 w-full">
                                            <Image 
                                                src={image.imageUrl}
                                                alt={article.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col flex-1">
                                        <p className="text-sm text-muted-foreground">{article.publication} &bull; {article.date}</p>
                                        <h3 className="text-lg font-bold font-headline mt-2 mb-3 flex-1">{article.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                                        <div className="flex items-center text-sm font-bold text-accent group-hover:text-primary transition-colors">
                                            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
