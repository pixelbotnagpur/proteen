'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, User, ArrowRight } from 'lucide-react';
import { classes } from '@/lib/data';
import { addDays, format, isSameDay, startOfDay } from 'date-fns';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Schedule() {
    const scheduleStartDate = startOfDay(new Date(classes[0].date));
    const [selectedDate, setSelectedDate] = useState(scheduleStartDate);
    const week = Array.from({ length: 7 }, (_, i) => addDays(scheduleStartDate, i));

    const filteredClasses = classes.filter(cls => {
        const [year, month, day] = cls.date.split('-').map(Number);
        const classDate = startOfDay(new Date(year, month - 1, day));
        return isSameDay(classDate, selectedDate);
    });

    return (
        <div className="container mx-auto py-16 md:py-24">
            <div className="flex flex-col items-center">
                {/* New Date Selector */}
                <div className="w-full max-w-4xl mb-12">
                    <div className="flex border-b border-primary/20 overflow-x-auto">
                        {week.map((day) => {
                            const isDaySelected = isSameDay(day, selectedDate);
                            return (
                                <button
                                    key={day.toString()}
                                    onClick={() => setSelectedDate(day)}
                                    className={cn(
                                        "text-center py-4 px-6 shrink-0 transition-colors duration-300 relative",
                                        "font-body tracking-widest uppercase text-sm",
                                        isDaySelected ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    <span>{format(day, 'EEE')}</span>
                                    <span className="ml-2 text-xs font-sans">{format(day, 'dd')}</span>
                                    {isDaySelected && (
                                        <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Class Listings */}
                <main className="w-full max-w-4xl space-y-4">
                    {filteredClasses.length > 0 ? (
                        filteredClasses.map((cls) => (
                            <Card key={cls.id} className="bg-background p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-primary/10 rounded-lg shadow-none">
                                <div className="flex items-center gap-4 text-left w-full">
                                    <div className="text-center w-20 flex-shrink-0">
                                        <p className="text-xl font-light">{cls.time}</p>
                                        <p className="text-xs text-muted-foreground uppercase">3 Spots</p>
                                    </div>
                                    <div className="border-l border-primary/10 pl-4 flex-1">
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
                                <Button size="icon" variant="ghost" className="group rounded-full w-12 h-12 flex-shrink-0">
                                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Card>
                        ))
                    ) : (
                        <Card className="bg-transparent p-12 flex flex-col items-center justify-center gap-4 border-none shadow-none text-center">
                            <h4 className="font-normal text-xl">No Classes Scheduled</h4>
                            <p className="text-muted-foreground max-w-sm">There are no classes available for the selected day. Please choose another date to continue your journey.</p>
                        </Card>
                    )}
                </main>
            </div>
        </div>
    );
}
