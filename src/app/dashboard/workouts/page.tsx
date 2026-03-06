
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getWorkoutPlan } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Bot, Dumbbell, Loader2 } from 'lucide-react';

const workoutPlanSchema = z.object({
  fitnessGoals: z.string().min(10, 'Please provide more details on fitness goals.'),
  workoutPreferences: z.string().min(10, 'Please provide more details on workout preferences.'),
});

export default function WorkoutsPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(workoutPlanSchema),
    defaultValues: {
      fitnessGoals: '',
      workoutPreferences: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof workoutPlanSchema>) => {
    setIsLoading(true);
    setWorkoutPlan(null);
    const result = await getWorkoutPlan(data);
    setIsLoading(false);

    if ("error" in result) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Failed to generate workout plan.',
      });
    } else {
      setWorkoutPlan(result.workoutPlan);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl tracking-tight">AI Workout Planner</h1>
      <p className="text-muted-foreground">
        Generate personalized workout plans for members based on their goals and preferences.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Member Details</CardTitle>
            <CardDescription>Enter the member's fitness information.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fitnessGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fitness Goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Lose 10kg in 3 months, build upper body strength, run a 5k."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="workoutPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workout Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 3 days a week, prefers morning workouts, has access to dumbbells and resistance bands, enjoys HIIT."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Bot className="mr-2 h-4 w-4" />
                  )}
                  Generate Plan
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Generated Workout Plan</CardTitle>
            <CardDescription>The AI-generated plan will appear below.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            {isLoading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
            {!isLoading && !workoutPlan && (
                <div className="text-center text-muted-foreground">
                    <Dumbbell className="mx-auto h-12 w-12" />
                    <p className="mt-4">Your personalized workout plan is moments away.</p>
                </div>
            )}
            {workoutPlan && (
              <div className="prose prose-sm dark:prose-invert max-w-none w-full h-full overflow-auto rounded-lg border bg-muted p-4">
                <pre className="whitespace-pre-wrap bg-transparent p-0 m-0 font-sans text-sm">{workoutPlan}</pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
