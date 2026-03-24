/**
 * Curated Unsplash photography — bright, modern workspaces (swap URLs anytime).
 * https://unsplash.com/license
 */
export const siteImages = {
  hero: {
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=960&q=85&auto=format&fit=crop',
    alt: 'Professional working on a laptop in a bright, modern office',
  },
  courses: {
    office: {
      src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=85&auto=format&fit=crop',
      alt: 'Laptop on a clean desk in a professional office environment',
    },
    data: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop',
      alt: 'Analytics dashboard and charts on a laptop screen',
    },
    marketing: {
      src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=85&auto=format&fit=crop',
      alt: 'Person using laptop and smartphone for digital work',
    },
  },
  whyMentor: {
    /** Verified 200 OK — previous photo ID returned 404 from Unsplash */
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&auto=format&fit=crop',
    alt: 'Team learning together with a mentor in a modern workspace',
  },
} as const
