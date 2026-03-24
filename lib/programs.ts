import { Laptop, BarChart3, Megaphone, type LucideIcon } from 'lucide-react'

export type ProgramDetail = {
  id: string
  title: string
  outcome: string
  duration: string
  summary: string
  icon: LucideIcon
  whatYouLearn: string[]
  toolsCovered: string[]
  realWorldApplication: string
  whoFor: string[]
}

export const programs: ProgramDetail[] = [
  {
    id: 'office',
    title: 'AI-Powered Office Professional',
    outcome: 'Build everyday workplace skills you can describe clearly in interviews.',
    duration: '2–3 weeks',
    summary:
      'Hands-on practice with documents, spreadsheets, email, and AI-assisted workflows so you can contribute confidently in office and admin roles.',
    icon: Laptop,
    whatYouLearn: [
      'How to structure documents, spreadsheets, and emails the way teams expect',
      'Professional tone and clarity for managers and clients',
      'Using AI tools responsibly to draft, summarize, and speed up routine work',
      'Checklists and habits that match real office workflows',
    ],
    toolsCovered: [
      'Spreadsheets (e.g. Excel or Sheets)',
      'Documents & templates',
      'Email and calendar basics',
      'Widely used AI assistants for productivity',
    ],
    realWorldApplication:
      'You apply skills to tasks similar to day-one work: updating a tracker, polishing a report, following up with stakeholders, and presenting information clearly.',
    whoFor: [
      'Students and freshers preparing for their first office role',
      'Job seekers who want concrete examples to discuss in interviews',
      'Beginners with no prior office experience',
    ],
  },
  {
    id: 'data',
    title: 'Data Analytics & Business Intelligence',
    outcome: 'Learn to turn data into clear answers and simple visuals employers understand.',
    duration: '60–90 days',
    summary:
      'From cleaning and exploring data to charts and short summaries, aligned with how teams actually use analytics in small and mid-sized organizations.',
    icon: BarChart3,
    whatYouLearn: [
      'Framing business questions and defining what to measure',
      'Cleaning and checking data before you analyze',
      'Summaries, simple charts, and “so what?” explanations',
      'Presenting findings in plain language, not jargon',
    ],
    toolsCovered: [
      'Spreadsheets for analysis',
      'Common chart and report patterns',
      'Introduction to BI-style dashboards (concepts and tools)',
      'Documentation of assumptions and sources',
    ],
    realWorldApplication:
      'You practice on scenarios like sales trends, operational metrics, or campaign results, and explain what the numbers suggest for a decision.',
    whoFor: [
      'Career switchers moving toward analyst or reporting roles',
      'Job seekers who need portfolio-style work samples',
      'Beginners comfortable with computers but new to analytics',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Freelancing',
    outcome: 'Learn practical marketing skills for a job or your first paid projects online.',
    duration: 'Flexible pace',
    summary:
      'Channel fundamentals, simple campaigns, and deliverables you can show to employers or early clients, without pretending you need a big agency background.',
    icon: Megaphone,
    whatYouLearn: [
      'How channels fit together (search, social, email at a basic level)',
      'Planning a small campaign or content piece with clear goals',
      'Basics of measuring what happened and what to try next',
      'Positioning yourself for freelance or internship-style work',
    ],
    toolsCovered: [
      'Common platform interfaces (ads and analytics at intro level)',
      'Content planning and simple creative workflows',
      'Lightweight reporting you can share with a client or manager',
    ],
    realWorldApplication:
      'You complete assignments that resemble briefs: a simple landing outline, a short content plan, or a campaign recap you could discuss in an interview.',
    whoFor: [
      'Students exploring marketing or side income',
      'Job seekers targeting junior marketing or content roles',
      'Beginners who want to start small and grow skills over time',
    ],
  },
]
