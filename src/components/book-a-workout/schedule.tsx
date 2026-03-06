'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, User, Settings2 } from 'lucide-react';
import { classes } from '@/lib/data';
import { addDays, format, isSameDay, startOfDay } from 'date-fns';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { cn } from '@/lib/utils';
import { useState } from 'react';

const actionCardImage = PlaceHolderImages.find((img) => img.id === 'book-a-workout-action-card');
const firstTimerCardImage = PlaceHolderImages.find((img) => img.id === 'book-a-workout-first-timer-card');

export function Schedule() {
    const scheduleStartDate = startOfDay(new Date(classes[0].date));
    const [selectedDate, setSelectedDate] = useState(scheduleStartDate);
    const week = Array.from({ length: 7 }, (_, i) => addDays(scheduleStartDate, i));

    const filteredClasses = classes.filter(cls => {
        const [year, month, day] = cls.date.split('-').map(Number);
        const classDate = startOfDay(new Date(year, month - 1, day));
        return isSameDay(classDate, selectedDate);
    });

    const sidebarContent = (
        <>
            <Card className="overflow-hidden bg-black text-primary-foreground text-center border-none shadow-none">
                {actionCardImage && (
                     <div className="relative h-64">
                        <Image
                            src={actionCardImage.imageUrl}
                            alt={actionCardImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={actionCardImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                )}
                <CardContent className="p-6 relative -mt-16 z-10 flex flex-col items-center">
                    <h3 className="font-headline text-2xl uppercase">Get in on the action</h3>
                    <p className="text-sm text-primary-foreground/80">Register or log in</p>
                    <Button variant="outline" className="mt-4 rounded-full border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-12">
                        LOG IN
                    </Button>
                </CardContent>
            </Card>

             <Card className="overflow-hidden bg-black text-primary-foreground text-center border-none shadow-none">
                {firstTimerCardImage && (
                     <div className="relative h-64">
                        <Image
                            src={firstTimerCardImage.imageUrl}
                            alt={firstTimerCardImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={firstTimerCardImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                )}
                <CardContent className="p-6 relative -mt-16 z-10 flex flex-col items-center">
                    <h3 className="font-headline text-2xl uppercase">3 Workouts</h3>
                     <p className="text-sm text-primary-foreground/80">(First Timer Deal) valid for 14 days</p>
                    <Button variant="outline" className="mt-4 rounded-full border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-12">
                        BUY NOW
                    </Button>
                </CardContent>
            </Card>
        </>
    );

    return (
        <div className="container mx-auto py-8">
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
                        <Select defaultValue="amsterdam">
                            <SelectTrigger className="w-full bg-background border-none rounded-full h-12 px-4">
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                                <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="amsterdam">Workouts of: AMSTERDAM</SelectItem>
                                <SelectItem value="rotterdam">Workouts of: ROTTERDAM</SelectItem>
                                <SelectItem value="utrecht">Workouts of: UTRECHT</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-background border-none flex-shrink-0">
                            <Settings2 className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="relative mb-6">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-1">
                                {week.map((day, index) => {
                                    const isDaySelected = isSameDay(day, selectedDate);
                                    return (
                                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-1">
                                            <div className="p-1">
                                                <Button
                                                    onClick={() => setSelectedDate(day)}
                                                    variant={isDaySelected ? 'default' : 'secondary'}
                                                    className={cn(
                                                        "w-full flex flex-col h-auto py-2 px-3 rounded-md text-center",
                                                        !isDaySelected && "bg-background"
                                                    )}
                                                >
                                                    <span className="font-normal uppercase text-sm">
                                                        {format(day, 'EEE')}
                                                    </span>
                                                    <span className={cn(
                                                        "text-xs uppercase",
                                                        isDaySelected ? "text-primary-foreground/80" : "text-muted-foreground"
                                                    )}>
                                                        {format(day, 'dd MMM')}
                                                    </span>
                                                </Button>
                                            </div>
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 h-14 w-auto p-3 rounded-none bg-white hover:bg-muted border-none" />
                            <CarouselNext className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 h-14 w-auto p-3 rounded-none bg-white hover:bg-muted border-none" />
                        </Carousel>
                    </div>

                    <main className="space-y-2">
                        {filteredClasses.length > 0 ? (
                            filteredClasses.map((cls) => (
                                <Card key={cls.id} className="bg-background p-4 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 border-none shadow-none">
                                    <div className="flex items-center gap-4">
                                        <div className="text-center w-16 flex-shrink-0">
                                            <p className="text-lg font-normal">{cls.time}</p>
                                            <p className="text-xs text-muted-foreground">3 SPOTS</p>
                                        </div>
                                        <div>
                                            <h4 className="font-normal text-lg">{cls.name}</h4>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{cls.location}</span>
                                                </div>
                                                 <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4" />
                                                    <span>{cls.instructor}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto self-stretch md:self-center">
                                        <p className="text-xs font-normal text-accent flex items-center justify-center text-center sm:mr-2 h-full">FIRST-TIMERS ONLY</p>
                                        <Button className="rounded-full px-6">BOOK</Button>
                                    </div>
                                </Card>
                            ))
                        ) : (
                            <Card className="bg-background p-8 flex flex-col items-center justify-center gap-4 border-none shadow-none text-center">
                                <h4 className="font-normal">No Classes Scheduled</h4>
                                <p className="text-muted-foreground">There are no classes available for the selected day. Please choose another date.</p>
                            </Card>
                        )}
                    </main>
                </div>
                
                {/* Desktop Sidebar */}
                <aside className="lg:col-span-4 space-y-8 hidden lg:block">
                   {sidebarContent}
                </aside>

                 {/* Mobile "sidebar" content */}
                 <div className="col-span-12 lg:hidden">
                    <aside className="space-y-8 mt-8">
                        {sidebarContent}
                    </aside>
                 </div>
            </div>
        </div>
    );
}
