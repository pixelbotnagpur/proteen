'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { EnquiryForm } from './EnquiryForm';
import { pricingFeatures, pricingPlans, pricingTerms } from '@/lib/data';
import { Logo } from '../icons';

export function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]);
    const [selectedTerm, setSelectedTerm] = useState(pricingTerms[0]);
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const total = selectedPlan.price + selectedTerm.priceModifier;

    const renderFeature = (value: any) => {
        if (typeof value === 'boolean') {
            return value ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />;
        }
        return <span className="text-sm">{value}</span>;
    };

  return (
    <>
      <section id="membership" className="py-16 md:py-20 bg-secondary text-foreground">
        <div className="container mx-auto px-8 space-y-12">
          <div className="text-center">
              <h2 className="text-2xl font-headline uppercase text-primary">Become a Member</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Join Proteen Fitness and get unlimited workouts and exclusive member benefits. Commitment issues? Go for our 'Flex' membership!</p>
          </div>
          
          {/* Step 1: Membership Plans - Desktop */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Step 1 Info & Features */}
              <div className="lg:col-span-1">
                  <div className="bg-primary text-primary-foreground p-6 h-full rounded-lg">
                      <div className="h-52 p-2">
                          <p className="text-sm text-primary-foreground/70">STEP 1/3</p>
                          <h3 className="text-2xl font-headline font-bold uppercase mt-1">Memberships</h3>
                          <p className="mt-2 text-sm text-primary-foreground/80">Your next-level health & fitness journey starts now. Choose your membership.</p>
                      </div>
                      <div className="mt-8 space-y-2">
                          {pricingFeatures.map((feature) => (
                              <div key={feature.name} className="h-[3.75rem] flex items-center border-t border-primary-foreground/20 text-sm font-semibold p-2">
                                  {feature.name}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Right Column: Plan Options */}
              <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  {pricingPlans.map((plan) => (
                      <div 
                          key={plan.name}
                          onClick={() => setSelectedPlan(plan)}
                          className={cn(
                              'bg-background border rounded-lg p-6 cursor-pointer transition-all h-full',
                              selectedPlan.name === plan.name ? 'border-accent' : 'border-primary/50'
                          )}
                      >
                          <div className={cn(
                              "relative rounded-xl p-6 flex flex-col justify-between h-52 text-left transition-colors",
                              plan.name === 'PREMIUM'
                                  ? 'bg-accent text-accent-foreground'
                                  : 'bg-primary text-primary-foreground'
                          )}>
                              <div className="flex justify-between items-start">
                                  <h4 className="text-2xl font-headline uppercase">{plan.name}</h4>
                                  <Logo className="w-10 h-10" />
                              </div>
                              <div className="flex items-end justify-between">
                                  <div>
                                      <p className="text-xs opacity-70">Membership</p>
                                      <p className="text-3xl font-bold">${plan.price},-</p>
                                  </div>
                                  <p className="text-sm opacity-70">/ 4 weeks</p>
                              </div>
                              <div className={cn("absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center", selectedPlan.name === plan.name ? (plan.name === 'PREMIUM' ? 'border-accent-foreground' : 'border-primary-foreground') : 'border-primary')}>
                                  {selectedPlan.name === plan.name && <div className={cn("w-2.5 h-2.5 rounded-full", plan.name === 'PREMIUM' ? 'bg-accent-foreground' : 'bg-primary-foreground')} />}
                              </div>
                          </div>
                          
                          <div className="mt-8 space-y-2">
                              {pricingFeatures.map((feature) => (
                                  <div key={feature.name} className="h-[3.75rem] flex items-center justify-center border-t border-primary/50 text-center p-2">
                                      {renderFeature(plan.features[feature.name as keyof typeof plan.features])}
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}
                  </div>
              </div>
          </div>

          {/* Step 1: Membership Plans - Mobile */}
          <div className="lg:hidden space-y-8">
              <div>
                  <p className="text-sm text-muted-foreground">STEP 1/3</p>
                  <h3 className="text-xl font-headline font-bold uppercase mt-1">Memberships</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sticky top-16 bg-secondary py-4 z-10">
                  {pricingPlans.map((plan) => (
                    <div 
                        key={plan.name}
                        onClick={() => setSelectedPlan(plan)}
                        className={cn(
                            'relative rounded-lg p-4 cursor-pointer transition-all flex flex-col justify-between h-40',
                            plan.name === 'PREMIUM'
                                ? 'bg-accent text-accent-foreground'
                                : 'bg-primary text-primary-foreground'
                        )}
                    >
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-headline uppercase">{plan.name}</h4>
                          <Logo className="w-8 h-8" />
                        </div>
                    
                        <div className="flex items-end justify-between">
                             <div>
                                <p className="text-xs opacity-70">Price</p>
                                <p className="text-2xl font-bold">${plan.price},-</p>
                             </div>
                             <p className="text-xs opacity-70">/ 4 weeks</p>
                        </div>
                        <div className={cn("absolute top-3 right-3 w-4 h-4 rounded-full border-2 flex items-center justify-center", selectedPlan.name === plan.name ? (plan.name === 'PREMIUM' ? 'border-accent-foreground' : 'border-primary-foreground') : 'border-primary')}>
                            {selectedPlan.name === plan.name && <div className={cn("w-2 h-2 rounded-full", plan.name === 'PREMIUM' ? 'bg-accent-foreground' : 'bg-primary-foreground')} />}
                        </div>
                    </div>
                  ))}
              </div>

              <div className="mt-8">
                  <div className="grid grid-cols-3 items-center py-2 bg-background rounded-t-lg px-2">
                      <p className="col-span-1 text-left font-bold text-sm">Features</p>
                      <p className="col-span-1 text-center font-bold text-sm">{pricingPlans[0].name}</p>
                      <p className="col-span-1 text-center font-bold text-sm">{pricingPlans[1].name}</p>
                  </div>
                  {pricingFeatures.map((feature) => (
                      <div key={feature.name} className="py-4 border-b border-primary/50 grid grid-cols-3 items-center bg-background px-2">
                          <p className="col-span-1 text-left font-medium text-sm">{feature.name}</p>
                          <div className="col-span-1 text-center">{renderFeature(pricingPlans[0].features[feature.name as keyof typeof pricingPlans[0]["features"]])}</div>
                          <div className="col-span-1 text-center">{renderFeature(pricingPlans[1].features[feature.name as keyof typeof pricingPlans[1]["features"]])}</div>
                      </div>
                  ))}
              </div>
          </div>
            
          {/* Step 2: Membership Term */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 hidden lg:block">
                  <div className="bg-primary text-primary-foreground p-6 h-full rounded-lg">
                      <div className="h-40 p-2">
                          <p className="text-sm text-primary-foreground/70">STEP 2/3</p>
                          <h3 className="text-2xl font-headline font-bold uppercase mt-1">Membership Term</h3>
                          <p className="mt-2 text-sm text-primary-foreground/80">Choose a membership that fits you best. Train for a better price or go for maximum freedom with a flex membership.</p>
                      </div>
                  </div>
              </div>
              <div className="lg:hidden">
                  <p className="text-sm text-muted-foreground">STEP 2/3</p>
                  <h3 className="text-xl font-headline font-bold uppercase mt-1">Membership Term</h3>
              </div>
              <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                      {pricingTerms.map(term => (
                          <div 
                              key={term.id}
                              onClick={() => setSelectedTerm(term)}
                              className={cn(
                                  'bg-background border rounded-lg p-6 cursor-pointer transition-all h-full',
                                  selectedTerm.id === term.id ? 'border-accent' : 'border-primary/50'
                              )}
                          >
                              <div className="lg:h-40 p-2">
                                  <div className="flex items-center gap-3">
                                      <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                                          {selectedTerm.id === term.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                                      </div>
                                      <h4 className="text-lg font-headline uppercase font-bold">{term.name}</h4>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-4">{term.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Step 3: Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 hidden lg:block">
                  <div className="bg-primary text-primary-foreground p-6 h-full rounded-lg">
                      <div className="p-2">
                          <p className="text-sm text-primary-foreground/70">STEP 3/3</p>
                          <h3 className="text-2xl font-headline font-bold uppercase mt-1">Summary</h3>
                          <p className="mt-2 text-sm text-primary-foreground/80">Choose the right membership and term to continue to the check-out.</p>
                      </div>
                  </div>
              </div>
              <div className="lg:hidden">
                  <p className="text-sm text-muted-foreground">STEP 3/3</p>
                  <h3 className="text-xl font-headline font-bold uppercase mt-1">Summary</h3>
              </div>
              <div className="lg:col-span-2">
                  <div className="bg-background border border-primary/50 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between h-full gap-6">
                      <div className="flex-1 w-full">
                          <div className="max-w-xs">
                              <div className="flex justify-between items-center text-muted-foreground">
                                  <p className="text-sm uppercase tracking-wider">{selectedPlan.name} {selectedTerm.id === 'flex' ? 'FLEX' : selectedTerm.name}</p>
                                  <p className="text-sm">${selectedPlan.price}</p>
                              </div>
                              <Separator className="my-3 bg-primary/50" />
                              <div className="flex justify-between items-center">
                                  <p className="">Total per 4 weeks</p>
                                  <p className="text-2xl">${total}</p>
                              </div>
                          </div>
                      </div>
                      <div>
                          <Button 
                            size="lg" 
                            className="rounded-full bg-accent hover:bg-accent/90 px-10 h-auto py-4 text-sm tracking-widest uppercase text-accent-foreground w-full md:w-auto"
                            onClick={() => setIsEnquiryOpen(true)}
                          >
                            Make an Enquiry
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <EnquiryForm isOpen={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
}
