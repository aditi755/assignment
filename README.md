# Next.js Google Auth Dashboard

## Author
**Aditi Bhadoriya**

## Overview

This is a modern full-stack web application built using **Next.js 15 App Router**, **NextAuth.js**, **TypeScript**, and **Tailwind CSS**. The goal of this project is to assess and demonstrate secure authentication with Google OAuth, protected routes, dynamic UI rendering, and responsive design.

Upon signing in with Google, users are welcomed with a personalized dashboard. They can navigate to a **Pizza Orders** page that displays a dynamic, styled table of mock order data, including order statuses and responsive layouts.

Deployed link: https://assignment-flame-one.vercel.app/

Demo Video: [here](https://www.loom.com/share/5ae0d434a590478aa3f4cb24c222cf33?sid=e0d4b63f-6476-479a-bf90-7409ba25fbf0)

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Deployment**: Vercel 

---

## Authentication Flow

- **Google OAuth** is used via NextAuth.js.
- Upon successful login, users are redirected to a personalized dashboard.
- Protected routes are enforced server-side: unauthenticated users are redirected to the login page.
- Logout is handled via a clear logout button using NextAuth’s `signOut` method.

---

## Dashboard Pages

### Hello Page

- Displays: `Hello, [User's Google Name]!`
- Default landing page after login.

### Pizza Orders Page

Accessible via a navigation link.
Displays mock pizza order data in a responsive table with the following fields:
- **Order ID**
- **Customer Name**
- **Pizza Type**
- **Quantity**
- **Order Date**
- **Status** (with colorful badges like `Pending`, `Preparing`, etc.)

> Data is hardcoded and does not require a backend database.
---

## Assumptions & Challenges Faced

### Assumptions

- The app does not require a database; mock data is used for demonstration.
- Only authenticated users should access the dashboard and pizza order pages.
- Google OAuth via NextAuth.js will be the sole authentication method.
- The pizza order data is static and does not require CRUD operations.
- Users are redirected to the login page if not authenticated.

### Challenges Faced & Learnings

- This was my **first time using NextAuth.js**. In previous projects, I had either implemented **custom JWT-based authentication** or used **Clerk**. Transitioning to NextAuth required learning both its **client-side and server-side flows**, which felt complex at first.
- Understanding how **NextAuth integrates with the App Router** in **Next.js 15** was a particularly challenging but **valuable learning experience**. The documentation was somewhat scattered, so I had to dive into various examples and guides to fully grasp the required configuration and usage patterns.
- I successfully implemented **secure server-side authentication** using NextAuth with **Google as the OAuth provider**, which included setting up `authOptions`, session providers, protected route handling.
- Since the project was written in **TypeScript**, I encountered and resolved several **type-related issues**, especially around dynamic table rendering and ensuring values conformed to ReactNode types. Resolving those required a better understanding of how to type data coming from dynamic keys or JSON objects.
- Because I have experience handling auth flows in both client and server contexts from previous apps, I was able to quickly apply those concepts to integrate authentication and session handling in this project with better structure and understanding.

## Local Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2. Install Dependencies
```bash
npm install
```
3. Create a .env.local file and add the following variables. To create NEXTAUTH_SECRET, run this command in your terminal- npx next-auth secret. For creating Google credentials, you need to go to Google Cloud Console and create a new project, from api and Services section, click on create credentials, add your redirect URI, and get the credentials to add here.
 ```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
```
4. Run the development server
```
npm run dev
```
   

