
# Proteen Fitness - Next.js Gym & Fitness Website Template with AI Admin Dashboard

## Overview

Proteen Fitness is a comprehensive, production-ready website template for gyms, fitness centers, and personal trainers. Built with the latest web technologies, it features a stunning, responsive frontend and a powerful, AI-driven admin dashboard to streamline operations. This template is designed to be easily customizable, allowing you to launch a professional fitness website in no time.

The frontend is built to convert visitors into members, with dedicated pages for classes, memberships, pricing, and location details. The integrated admin dashboard provides a complete solution for managing members, tracking attendance, handling payments, and leveraging AI for tasks like creating personalized workout plans and optimizing member communication.

## Key Features

### Stunning Frontend Website

*   **Modern & Responsive Design:** A beautiful and performant website that looks great on all devices, from desktops to mobile phones.
*   **Smooth Animations:** Engaging user experience with animations powered by Framer Motion.
*   **7+ Pre-built Pages:**
    *   Homepage: A captivating landing page with multiple sections to showcase your gym.
    *   About Us: Share your story, mission, and introduce your team.
    *   Locations: Display gym location, hours, and contact information.
    *   Memberships: Detail the benefits of joining your gym.
    *   Classes & Booking: A schedule view for upcoming classes.
    *   Pricing: A clear, multi-step pricing table to explain membership tiers.
    *   First-Timer Guide: A welcoming page for new visitors.
*   **Easy Customization:** Centralized data and media files (`src/lib/data.ts` and `src/lib/placeholder-images.json`) make it simple to change text, images, and videos across the site.
*   **Google Sheets Integration:** A "Make an Enquiry" form that seamlessly saves submissions to your Google Sheet.

### AI-Powered Admin Dashboard

A secure, built-in dashboard to manage every aspect of your gym:

*   **Dashboard Overview:** At-a-glance view of key metrics: total members, monthly revenue, today's attendance, and overdue payments.
*   **Member Management:** A complete CRM to add, view, and manage your member list.
*   **Attendance Tracking:** Log check-ins and view a complete history of member attendance.
*   **Live AI Check-in:** Use a webcam to automatically recognize and check-in members using facial recognition.
*   **Payment & Transaction History:** Keep track of all member payments and their statuses.
*   **Subscription Plan Management:** Easily define and display different membership plans.
*   **AI Workout Planner:** Generate personalized workout plans for members by simply inputting their goals and preferences. The AI acts as a virtual personal trainer.
*   **AI Notification Assistant:** Get AI-driven recommendations on the best channel (Email, SMS, Push) and timing to send notifications to members based on context.

## Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **AI Functionality:** [Google's Genkit](https://firebase.google.com/docs/genkit)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation
*   **Database Integration:** Easily integrates with Google Sheets for form submissions.

## Customization & Setup

This template is designed for easy customization.

### 1. Update Content, Images, and Videos

Nearly all content (text, links, features) and media (images, videos) can be changed from two central files:

*   **`src/lib/data.ts`**: Modify the arrays and objects in this file to update text content like pricing plans, team members, footer links, and more.
*   **`src/lib/placeholder-images.json`**: Update the `imageUrl` and `videoUrl` properties in this file to point to your own media.

To use your own local media:
1.  Create a `public` folder in the root of your project.
2.  Inside `public`, create `images` and `videos` subfolders.
3.  Place your files in these folders.
4.  Update the URLs in `src/lib/placeholder-images.json` to point to your local files (e.g., `/images/my-image.jpg` or `/videos/my-video.mp4`).

### 2. Configure Theme and Styling

Change the primary colors, fonts, and other styles easily:

*   **Colors:** Open `src/app/globals.css`. You can change the HSL values for CSS variables like `--primary`, `--secondary`, `--accent`, etc., to match your brand.
*   **Fonts:** The project uses Google Fonts (`Cal Sans` and `Boldonse`). You can change these in `src/app/layout.tsx` (for the `<link>` tags) and `tailwind.config.ts` (in the `fontFamily` section).

### 3. Set Up Environment Variables

Create a file named `.env.local` in the root of your project to set up the necessary credentials for AI features and the Google Sheets integration.

```
# For Google Sheets Integration
GOOGLE_SHEET_ID=YOUR_GOOGLE_SHEET_ID
GOOGLE_SERVICE_ACCOUNT_EMAIL=YOUR_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY="YOUR_GOOGLE_PRIVATE_KEY_IN_ONE_LINE"

# For Genkit AI Features
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

**To get these credentials:**
1.  Follow the official Google Cloud documentation to [create a service account](https://cloud.google.com/iam/docs/service-accounts-create) and enable the **Google Sheets API**.
2.  Share your Google Sheet with the service account email and give it "Editor" permissions.
3.  Obtain a **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Getting Started

Follow these steps to get your project up and running.

### Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, or pnpm

### Installation & Development

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env.local` file in the project root and add your Google and Gemini credentials as described above.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see your website. The admin dashboard is available at [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

Thank you for choosing the Proteen Fitness template!
