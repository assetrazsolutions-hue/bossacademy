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

/** Full content for /programs/[slug] decision pages */
export type CoursePageExtras = {
  heroSubtitle: string
  /** Outcome-focused: what you can do after */
  ableToDo: string[]
  learnByDoing: {
    intro: string
    tasks: string[]
  }
  courseDetails: {
    mode: string
    support: string
  }
  whyThisCourse: string[]
  faq: { q: string; a: string }[]
}

export type CourseProgram = ProgramDetail & CoursePageExtras

export const programs: CourseProgram[] = [
  {
    id: 'office',
    title: 'AI-Powered Office Professional',
    outcome: 'Build everyday workplace skills you can describe clearly in interviews.',
    heroSubtitle:
      'Go from zero to confident with documents, spreadsheets, email, and AI-assisted workflows: the skills most offices use every week.',
    duration: '2-3 weeks',
    summary:
      'Hands-on practice with documents, spreadsheets, email, and AI-assisted workflows so you can contribute confidently in office and admin roles.',
    icon: Laptop,
    whatYouLearn: [
      'Structure documents, spreadsheets, and emails the way real teams expect',
      'Keep tone professional for managers and clients',
      'Use AI tools to draft, summarize, and speed up routine work responsibly',
      'Build habits and checklists that match actual office workflows',
    ],
    toolsCovered: [
      'Microsoft Excel or Google Sheets',
      'Microsoft Word or Google Docs',
      'Outlook, Gmail, or similar email and calendar tools',
      'Copilot, ChatGPT, or similar AI assistants for productivity',
    ],
    realWorldApplication:
      'You apply skills to tasks similar to day-one work: updating a tracker, polishing a report, following up with stakeholders, and presenting information clearly.',
    whoFor: [
      'Students and freshers preparing for their first office role',
      'Job seekers who want concrete examples to discuss in interviews',
      'Beginners with no prior office experience',
    ],
    ableToDo: [
      'Send clear, structured emails and follow-ups people actually reply to',
      'Build and update spreadsheets your team can rely on for status and numbers',
      'Use AI to draft first versions of summaries and messages, then refine with judgment',
      'Turn messy notes into short updates managers can scan in seconds',
    ],
    learnByDoing: {
      intro:
        'You learn by repeating short, realistic tasks, not long theory blocks. Each module ends with something you could describe in an interview.',
      tasks: [
        'Fix and format a real-looking report or tracker',
        'Reply to a mock client or manager email with the right tone',
        'Use AI to summarize a long thread, then tighten it in your own words',
      ],
    },
    courseDetails: {
      mode: 'Online live sessions + practice assignments (batch schedule shared at enrollment)',
      support: 'WhatsApp for questions, step-by-step guidance, and batch-based check-ins',
    },
    whyThisCourse: [
      'Practical learning: you practice tasks, not only watch slides',
      'Beginner-friendly: we start from basics and build in order',
      'Real tools: Excel/Sheets, docs, email, and common AI assistants',
      'Step-by-step guidance: clear order so you are not overwhelmed',
    ],
    faq: [
      {
        q: 'Do I need any experience with Excel or office software?',
        a: 'No. We start from everyday tasks and build up. If you can use a computer and browse the web, you can start here.',
      },
      {
        q: 'Will this guarantee me a job?',
        a: 'We do not promise job placement. You will leave with tasks and examples you can explain clearly, which helps in interviews.',
      },
      {
        q: 'Is AI required for every assignment?',
        a: 'We show how to use AI responsibly alongside your own judgment. You will still practice writing and checking your own work.',
      },
      {
        q: 'What if I fall behind?',
        a: 'Reach out on WhatsApp or in session. We design pacing for beginners and can suggest what to prioritize first.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data Analytics & Business Intelligence',
    outcome: 'Learn to turn data into clear answers and simple visuals employers understand.',
    heroSubtitle:
      'Move from “I opened a spreadsheet” to “here is what the data suggests”, with charts, short summaries, and plain language.',
    duration: '60-90 days',
    summary:
      'From cleaning and exploring data to charts and short summaries, aligned with how teams actually use analytics in small and mid-sized organizations.',
    icon: BarChart3,
    whatYouLearn: [
      'Frame a business question and decide what to measure',
      'Clean and check data before you analyze',
      'Build summaries, simple charts, and “so what?” takeaways',
      'Present findings in plain language, not jargon',
    ],
    toolsCovered: [
      'Microsoft Excel or Google Sheets (analysis and pivot-style work)',
      'Intro to Power BI or Looker Studio-style dashboards (concepts and simple builds)',
      'Chart and table patterns used in real reports',
      'Light documentation of sources and assumptions',
    ],
    realWorldApplication:
      'You practice on scenarios like sales trends, operational metrics, or campaign results, and explain what the numbers suggest for a decision.',
    whoFor: [
      'Career switchers moving toward analyst or reporting roles',
      'Job seekers who need portfolio-style work samples',
      'Beginners comfortable with computers but new to analytics',
    ],
    ableToDo: [
      'Take a messy sheet and turn it into a clean table you can trust',
      'Pick the right chart type for a simple business question',
      'Write a half-page “so what?” summary a manager can use',
      'Explain limitations and assumptions like a junior analyst would',
    ],
    learnByDoing: {
      intro:
        'Each topic ends in a mini-project: a question, a small dataset, and a deliverable (table + chart + short explanation).',
      tasks: [
        'Clean a sample sales or ops sheet and flag obvious issues',
        'Build one dashboard-style view and explain one insight',
        'Record a short written takeaway you could paste into email or Slack',
      ],
    },
    courseDetails: {
      mode: 'Online live sessions + project practice (pacing designed for working learners where possible)',
      support: 'WhatsApp for doubts, structured milestones, and feedback on practice work',
    },
    whyThisCourse: [
      'Practical learning: projects look like junior analyst work samples',
      'Beginner-friendly: we introduce analysis in steps, not all at once',
      'Real tools: spreadsheets plus intro BI-style reporting',
      'Step-by-step guidance: from question to chart to story',
    ],
    faq: [
      {
        q: 'Do I need math or statistics first?',
        a: 'Basic arithmetic and logical thinking are enough to start. We introduce concepts as you need them for each task.',
      },
      {
        q: 'Is Power BI mandatory?',
        a: 'We use widely available tools. Exact stack may vary by batch; the focus is on how to think and present data, not one vendor only.',
      },
      {
        q: 'Will I be a data scientist after this?',
        a: 'No. This is oriented toward business analytics and reporting foundations, not advanced modeling.',
      },
      {
        q: 'Can I do this while job searching?',
        a: 'Yes. The timeline is designed for steady weekly practice. Tell us your constraints and we can suggest a sustainable pace.',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Freelancing',
    outcome: 'Learn practical marketing skills for a job or your first paid projects online.',
    heroSubtitle:
      'Understand channels, run small campaigns, and produce deliverables you can show to employers, or to your first clients.',
    duration: 'Flexible pace',
    summary:
      'Channel fundamentals, simple campaigns, and deliverables you can show to employers or early clients, without pretending you need a big agency background.',
    icon: Megaphone,
    whatYouLearn: [
      'How search, social, and email fit together at a basic level',
      'Plan a small campaign or content piece with a clear goal',
      'Measure what happened and decide what to try next',
      'Position yourself for freelance or internship-style opportunities',
    ],
    toolsCovered: [
      'Meta Business Suite / ad interfaces (intro level)',
      'Google Analytics (basics of reading traffic and goals)',
      'Canva or similar for simple creatives',
      'Spreadsheets for a simple campaign recap',
    ],
    realWorldApplication:
      'You complete assignments that resemble briefs: a simple landing outline, a short content plan, or a campaign recap you could discuss in an interview.',
    whoFor: [
      'Students exploring marketing or side income',
      'Job seekers targeting junior marketing or content roles',
      'Beginners who want to start small and grow skills over time',
    ],
    ableToDo: [
      'Outline a simple funnel: audience → message → channel → next step',
      'Draft a short content or ad plan with measurable goals',
      'Produce a one-page recap stakeholders or clients can understand',
      'Describe how you would start freelancing with low risk',
    ],
    learnByDoing: {
      intro:
        'You work from briefs similar to real small-business or internship tasks: short, concrete, and portfolio-friendly.',
      tasks: [
        'Build a mini campaign plan for a sample product or service',
        'Create a simple creative + caption set and explain why',
        'Write a plain recap: what you tried, what happened, what you would change',
      ],
    },
    courseDetails: {
      mode: 'Online sessions + flexible assignments (pace agreed per batch)',
      support: 'WhatsApp for questions, templates for deliverables, and guidance on priorities',
    },
    whyThisCourse: [
      'Practical learning: deliverables you can show, not only notes',
      'Beginner-friendly: channels explained in plain language first',
      'Real tools: common ad and analytics surfaces at intro depth',
      'Step-by-step guidance: from idea to small campaign to recap',
    ],
    faq: [
      {
        q: 'Do I need a website or budget for ads?',
        a: 'Not to start. We use small examples and optional spend concepts. You can learn the flow before spending your own money.',
      },
      {
        q: 'Is this only for freelancing?',
        a: 'No. The same skills apply to junior marketing roles. We call out freelance paths for people who want side income.',
      },
      {
        q: 'What if I am not creative?',
        a: 'Marketing here is about clear goals and simple execution. We give structures so you are not staring at a blank page.',
      },
      {
        q: 'How long until I can earn?',
        a: 'It depends on your pace and niche. We focus on skills and small wins first, not overnight income promises.',
      },
    ],
  },
]

export function getProgramBySlug(slug: string): CourseProgram | undefined {
  return programs.find((p) => p.id === slug)
}
