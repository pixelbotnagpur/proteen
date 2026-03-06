'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from './Menu';
import { EnquiryForm } from './EnquiryForm';
import { Send } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleStartToday = () => {
    setIsMenuOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out bg-secondary',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-3 h-16 items-center">
            <div className="justify-self-start pl-8">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(true)}
                    className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground transition-colors duration-200 p-3"
                    aria-label="Open menu"
                >
                    <div className="flex flex-col items-center justify-center gap-[3px]">
                        <div className="w-4 h-[1.5px] bg-current" />
                        <div className="w-4 h-[1.5px] bg-current" />
                    </div>
                </Button>
            </div>
            
            <div className="justify-self-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-3xl font-headline text-primary transition-colors"
              >
                PROTEEN
              </Link>
            </div>
            
            <div className="justify-self-end pr-8 hidden md:flex">
              <div className={cn(
                      "flex items-center rounded-full h-12 p-0.5 transition-colors duration-300 bg-accent"
                  )}>
                      <Button
                          variant="ghost"
                          onClick={() => setIsLoginOpen(true)}
                          className={cn(
                              'h-full rounded-full px-3 hover:bg-transparent'
                          )}
                      >
                          <Send className="text-primary" />
                      </Button>
                      <Button
                          variant="default"
                          onClick={() => setIsLoginOpen(true)}
                          className={cn(
                              'h-full rounded-full px-5 text-xs tracking-wider bg-primary text-primary-foreground hover:bg-primary/90'
                          )}
                      >
                          Start Today
                      </Button>
                  </div>
              </div>
          </div>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} onStartTodayClick={handleStartToday} />
      <EnquiryForm isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </>
  );
}
