'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized workout plans.
 *
 * The flow takes user fitness goals and preferences as input and returns a personalized workout plan.
 * It exports the GeneratePersonalizedWorkoutPlansInput, GeneratePersonalizedWorkoutPlansOutput types, and the generatePersonalizedWorkoutPlans function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedWorkoutPlansInputSchema = z.object({
  fitnessGoals: z
    .string()
    .describe('The fitness goals of the member (e.g., lose weight, build muscle).'),
  workoutPreferences: z
    .string()
    .describe(
      'The workout preferences of the member (e.g., preferred workout types, available equipment).' + 
      'Specify any preferences that the member has, such as time available, preferred days, etc.'
    ),
});
export type GeneratePersonalizedWorkoutPlansInput = z.infer<
  typeof GeneratePersonalizedWorkoutPlansInputSchema
>;

const GeneratePersonalizedWorkoutPlansOutputSchema = z.object({
  workoutPlan: z
    .string()
    .describe('A personalized workout plan based on the member’s goals and preferences.'),
});
export type GeneratePersonalizedWorkoutPlansOutput = z.infer<
  typeof GeneratePersonalizedWorkoutPlansOutputSchema
>;

export async function generatePersonalizedWorkoutPlans(
  input: GeneratePersonalizedWorkoutPlansInput
): Promise<GeneratePersonalizedWorkoutPlansOutput> {
  return generatePersonalizedWorkoutPlansFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedWorkoutPlansPrompt',
  input: {schema: GeneratePersonalizedWorkoutPlansInputSchema},
  output: {schema: GeneratePersonalizedWorkoutPlansOutputSchema},
  prompt: `You are a personal trainer. Generate a personalized workout plan based on the member’s fitness goals and preferences.

Fitness Goals: {{{fitnessGoals}}}
Workout Preferences: {{{workoutPreferences}}}

Workout Plan:`,
});

const generatePersonalizedWorkoutPlansFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedWorkoutPlansFlow',
    inputSchema: GeneratePersonalizedWorkoutPlansInputSchema,
    outputSchema: GeneratePersonalizedWorkoutPlansOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
