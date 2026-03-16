# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to SQL Editor in your Supabase dashboard
4. Copy and paste the contents of `supabase-setup.sql` and run it
5. Go to Project Settings > API
6. Copy your Project URL and anon/public key

## Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the values with your actual Supabase credentials.

## Step 4: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## Troubleshooting

### Form submissions not working?

- Make sure you've run the SQL setup script in Supabase
- Verify your environment variables are correct
- Check the browser console for any errors
- Ensure Row Level Security policies are set correctly in Supabase

### Styling issues?

- Make sure Tailwind CSS is properly configured
- Run `npm install` to ensure all dependencies are installed

### Build errors?

- Ensure you're using Node.js 18 or higher
- Delete `node_modules` and `.next` folders, then run `npm install` again
