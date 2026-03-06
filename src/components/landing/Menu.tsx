'use client';

import { Sheet, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/locations', label: 'LOCATIONS' },
    { href: '/first-timer', label: 'FIRST-TIMER' },
    { href: '/memberships', label: 'MEMBERSHIPS' },
    { href: '/classes', label: 'CLASSES' },
    { href: '/pricing', label: 'PRICING' },
];

interface MenuProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onStartTodayClick: () => void;
}

export function Menu({ isOpen, onOpenChange, onStartTodayClick }: MenuProps) {
    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="bg-background text-foreground p-0 w-full md:max-w-[50vw] flex flex-col">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="container mx-auto px-8 flex items-center h-16 flex-shrink-0">
                    <SheetClose asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground transition-colors duration-200 p-3"
                            )}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6 text-primary-foreground" />
                        </Button>
                    </SheetClose>
                </div>

                <div className="flex-1 flex flex-col justify-center items-start container mx-auto px-8 overflow-y-auto pb-8">
                    <nav>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-body tracking-widest uppercase text-primary hover:text-accent transition-colors"
                                        onClick={() => onOpenChange(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-12 w-full md:hidden">
                        <Button
                            onClick={onStartTodayClick}
                            className="w-full h-12 rounded-full bg-primary text-primary-foreground text-sm tracking-widest uppercase"
                        >
                            Start Today
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
