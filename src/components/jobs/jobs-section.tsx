'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { jobListings } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

const cultureImage = PlaceHolderImages.find((img) => img.id === 'jobs-culture-image');

export function JobsSection({ onApplyNowClick }: { onApplyNowClick: () => void }) {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="min-h-[400px]">
              {cultureImage && (
                <Image
                  src={cultureImage.imageUrl}
                  alt={cultureImage.description}
                  width={800}
                  height={1000}
                  className="object-cover w-full h-full max-h-[600px] rounded-lg"
                  data-ai-hint={cultureImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-headline uppercase text-foreground mb-4">
                Our Culture
              </h2>
              <p className="text-muted-foreground">
                At Proteen Fitness, we're more than just a gym; we're a community. We believe in fostering a positive, inclusive, and high-energy environment where both our members and our team can thrive. We're passionate about fitness, dedicated to excellence, and committed to supporting each other.
              </p>
              <p className="text-muted-foreground mt-4">
                Join a team that values hard work, a positive mindset, and the drive to help others become the best version of themselves.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-8 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-headline uppercase text-primary">
                    Open Positions
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Ready to make a difference? Find your next career opportunity with Proteen Fitness and help us build a stronger community.
                </p>
            </div>
            <div className="space-y-6">
                {jobListings.map((job, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{job.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground pt-1">
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Briefcase className="h-4 w-4" />
                                    <span>{job.type}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{job.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="p-0 text-accent hover:text-primary" onClick={onApplyNowClick}>
                                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
