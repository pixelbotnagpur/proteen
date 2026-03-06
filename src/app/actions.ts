'use server';

import { automatedNotificationReasoning, AutomatedNotificationReasoningInput } from '@/ai/flows/automated-notification-reasoning';
import { generatePersonalizedWorkoutPlans, GeneratePersonalizedWorkoutPlansInput } from '@/ai/flows/generate-personalized-workout-plans';
import { recognizeMember as recognizeMemberFlow, RecognizeMemberInput } from '@/ai/flows/recognize-member-flow';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


export async function getWorkoutPlan(input: GeneratePersonalizedWorkoutPlansInput) {
  try {
    const result = await generatePersonalizedWorkoutPlans(input);
    return result;
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate workout plan.' };
  }
}

export async function getNotificationSuggestion(input: AutomatedNotificationReasoningInput) {
  try {
    const result = await automatedNotificationReasoning(input);
    return result;
  } catch (error) {
    console.error(error);
    return { error: 'Failed to get notification suggestion.' };
  }
}

export async function recognizeMember(input: RecognizeMemberInput) {
    try {
      const result = await recognizeMemberFlow(input);
      return result;
    } catch (error) {
      console.error(error);
      return { error: 'Failed to process the image.' };
    }
}

export async function submitEnquiry(formData: {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}) {
  try {
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.log('Google Sheets environment variables not set. Skipping sheet update. For local development, please create a .env.local file with your credentials.', formData);
      // Simulate success for development without credentials
      return { success: true };
    }

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      Timestamp: new Date().toUTCString(),
      Email: formData.email,
      'First Name': formData.firstName,
      'Last Name': formData.lastName,
      Message: formData.message,
    });
    
    return { success: true };
  } catch (error: any) {
    console.error('Error submitting enquiry to Google Sheet:', error);
    return { success: false, message: error.message || 'Could not submit enquiry.' };
  }
}
