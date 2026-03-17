-- BOSS Global Academy - Supabase Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
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

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public inserts (for registration form submissions)
CREATE POLICY "Allow public inserts" ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Trainer applications table
CREATE TABLE IF NOT EXISTS trainer_applications (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  experience_years INTEGER NOT NULL,
  area_of_expertise TEXT NOT NULL,
  preferred_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE trainer_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public trainer applications" ON trainer_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: Create a policy to allow authenticated users to read all registrations
-- Uncomment if you want authenticated users to view registrations
-- CREATE POLICY "Allow authenticated reads" ON registrations
--   FOR SELECT
--   TO authenticated
--   USING (true);
