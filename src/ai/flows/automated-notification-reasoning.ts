'use server';

/**
 * @fileOverview This file defines a Genkit flow for automated notification reasoning.
 *
 * The flow determines the best way to send automated notifications and reminders based on context and member preferences.
 * It exports the `automatedNotificationReasoning` function, `AutomatedNotificationReasoningInput` type, and `AutomatedNotificationReasoningOutput` type.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedNotificationReasoningInputSchema = z.object({
  memberPreferences: z.string().describe('The notification preferences of the member, such as preferred channels and timing.'),
  notificationContext: z.string().describe('The context of the notification, such as payment due date or class schedule update.'),
  content: z.string().describe('The content of the message to be sent.'),
});
export type AutomatedNotificationReasoningInput = z.infer<typeof AutomatedNotificationReasoningInputSchema>;

const AutomatedNotificationReasoningOutputSchema = z.object({
  channel: z.string().describe('The recommended channel for sending the notification (e.g., email, SMS, push).'),
  timing: z.string().describe('The recommended timing for sending the notification (e.g., immediate, scheduled).'),
  message: z.string().describe('The message to be sent to the user.'),
});
export type AutomatedNotificationReasoningOutput = z.infer<typeof AutomatedNotificationReasoningOutputSchema>;

export async function automatedNotificationReasoning(input: AutomatedNotificationReasoningInput): Promise<AutomatedNotificationReasoningOutput> {
  return automatedNotificationReasoningFlow(input);
}

const automatedNotificationReasoningPrompt = ai.definePrompt({
  name: 'automatedNotificationReasoningPrompt',
  input: {schema: AutomatedNotificationReasoningInputSchema},
  output: {schema: AutomatedNotificationReasoningOutputSchema},
  prompt: `You are an AI assistant that helps determine the best way to send automated notifications.

  Given the member's preferences: {{{memberPreferences}}},
  and the context of the notification: {{{notificationContext}}},
  and the content of the notification: {{{content}}},

  Determine the most appropriate channel (email, SMS, push), timing (immediate, scheduled), and create the message to be sent to the user. Use the provided context and member preferences to make the decision. 

  Ensure the output is correctly formatted and contains all the required information.`,
});

const automatedNotificationReasoningFlow = ai.defineFlow(
  {
    name: 'automatedNotificationReasoningFlow',
    inputSchema: AutomatedNotificationReasoningInputSchema,
    outputSchema: AutomatedNotificationReasoningOutputSchema,
  },
  async input => {
    const {output} = await automatedNotificationReasoningPrompt(input);
    return output!;
  }
);
