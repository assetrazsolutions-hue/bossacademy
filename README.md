# BOSS Global Academy of Technology

A modern website for BOSS Global Academy of Technology built with Next.js, Tailwind CSS, and Supabase.

## Features

- **Home Page**: Hero section, About section, Training Programs overview, Partner With Us section, and Call to Action
- **Programs Page**: Detailed information about all training programs
- **Register Page**: Registration form connected to Supabase database
- **Contact Page**: Contact information with phone number and WhatsApp button

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (Database)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Set up Supabase:

   a. Create a new project at [supabase.com](https://supabase.com)
   
   b. Create a table named `registrations` with the following columns:
   ```sql
   CREATE TABLE registrations (
     id BIGSERIAL PRIMARY KEY,
     full_name TEXT NOT NULL,
     phone_number TEXT NOT NULL,
     email TEXT NOT NULL,
     city TEXT NOT NULL,
     education_profession TEXT NOT NULL,
     program_interested TEXT NOT NULL,
     organization TEXT,
     message TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
   );
   ```

   c. Get your Supabase URL and anon key from Project Settings > API

4. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [https://www.bossacademy.org](https://www.bossacademy.org) in your browser

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page
│   ├── programs/
│   │   └── page.tsx      # Programs page
│   ├── register/
│   │   └── page.tsx      # Register page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section component
│   ├── ProgramCard.tsx   # Program card component
│   ├── RegistrationForm.tsx  # Registration form component
│   └── Footer.tsx        # Footer component
├── lib/
│   └── supabase.ts       # Supabase client configuration
└── package.json
```

## Components

- **Navbar**: Responsive navigation bar with mobile menu
- **Hero**: Hero section with call-to-action buttons
- **ProgramCard**: Reusable card component for displaying programs
- **RegistrationForm**: Form component that submits data to Supabase
- **Footer**: Footer with contact information and links

## Pages

- **Home** (`/`): Landing page with all main sections
- **Programs** (`/programs`): Detailed view of all training programs
- **Register** (`/register`): Registration form for training programs
- **Contact** (`/contact`): Contact information and inquiry form

## Supabase Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the following SQL to create the registrations table:

```sql
CREATE TABLE registrations (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  education_profession TEXT NOT NULL,
  program_interested TEXT NOT NULL,
  organization TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (adjust as needed for your security requirements)
CREATE POLICY "Allow public inserts" ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.
