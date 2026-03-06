'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from '@/components/icons';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EnquiryForm } from './EnquiryForm';
import { footerLinks, socialLinks } from '@/lib/data';

const socialIcons: { [key: string]: React.ElementType } = {
    Instagram,
    Facebook,
    Twitter,
};

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <>
      <footer ref={containerRef} className="pt-12 md:pt-16 pb-8 bg-primary text-primary-foreground overflow-hidden">
        <motion.div style={{ y }}>
          <div className="container mx-auto px-8">
              <div className="text-center mb-12">
                  <p className="text-lg text-accent font-headline uppercase">
                      You are in control
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
                  {Object.entries(footerLinks).map(([title, links]) => (
                      <div key={title}>
                          <h3 className="tracking-wider uppercase mb-4">{title}</h3>
                          <ul className="space-y-3">
                              {links.map(link => (
                                  <li key={link.title}>
                                      <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wider">
                                          {link.title}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
                   <div>
                      <h3 className="tracking-wider uppercase mb-4">JOIN OUR TRIBE!</h3>
                      <p className="text-sm text-primary-foreground/80 mb-4">
                          Have questions or ready to get started? Make an enquiry.
                      </p>
                      <Button 
                        size="lg" 
                        className="rounded-full bg-accent hover:bg-accent/90 px-8 h-auto py-3 text-sm tracking-widest uppercase text-accent-foreground w-full md:w-auto"
                        onClick={() => setIsEnquiryOpen(true)}
                      >
                          MAKE AN ENQUIRY
                      </Button>
                  </div>
              </div>

              <Separator className="my-12 bg-primary-foreground/20" />
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-2">
                      <Logo className="h-6 w-6" />
                      <p className="text-sm text-primary-foreground/80">&copy; {new Date().getFullYear()} Proteen. All rights reserved.</p>
                  </div>
                  <div className="flex items-center gap-4">
                      {socialLinks.map((social, index) => {
                          const Icon = socialIcons[social.icon];
                          if (!Icon) return null;
                          return (
                          <Link key={index} href={social.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                              <Icon className="h-5 w-5" />
                          </Link>
                      )})}
                  </div>
              </div>
          </div>
        </motion.div>
      </footer>
      <EnquiryForm isOpen={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
}
