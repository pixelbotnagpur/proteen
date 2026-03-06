'use server';
/**
 * @fileOverview This file defines a Genkit flow for recognizing a gym member from a photo.
 *
 * The flow takes a photo and a list of members as input and returns the ID of the recognized member.
 * It exports the RecognizeMemberInput, RecognizeMemberOutput types, and the recognizeMember function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { Member } from '@/lib/data';

const MemberSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    subscriptionPlan: z.enum(['Basic', 'Pro', 'Elite']),
    joinDate: z.string(),
    avatar: z.string().describe("URL to the member's avatar image."),
});

const RecognizeMemberInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a person to recognize, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  members: z.array(MemberSchema).describe('A list of all known members.'),
});
export type RecognizeMemberInput = z.infer<typeof RecognizeMemberInputSchema>;

const RecognizeMemberOutputSchema = z.object({
  memberId: z.string().optional().describe('The ID of the recognized member, if a match is found.'),
});
export type RecognizeMemberOutput = z.infer<
  typeof RecognizeMemberOutputSchema
>;

export async function recognizeMember(
  input: RecognizeMemberInput
): Promise<RecognizeMemberOutput> {
  return recognizeMemberFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recognizeMemberPrompt',
  input: {schema: RecognizeMemberInputSchema},
  output: {schema: RecognizeMemberOutputSchema},
  prompt: `You are an advanced facial recognition system for a gym. Your task is to identify a person from a provided photo by comparing it against a list of registered gym members.

Analyze the image provided in the prompt.
Compare the person in the image against the following list of members:
{{#each members}}
- Member ID: {{id}}, Name: {{name}}, Photo: {{media url=avatar}}
{{/each}}

If you find a clear match, return the 'memberId' of that member.
If the person in the photo does not match any of the members, or if you are uncertain, do not return a memberId.

Photo to analyze:
{{media url=photoDataUri}}
`,
});

const recognizeMemberFlow = ai.defineFlow(
  {
    name: 'recognizeMemberFlow',
    inputSchema: RecognizeMemberInputSchema,
    outputSchema: RecognizeMemberOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
