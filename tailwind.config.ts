import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      colors: {
        /** Brand blue (primary) */
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        /** Orange accent (CTAs) */
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#F97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        cta: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#F97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          subtle: '#f1f5f9',
        },
        background: {
          DEFAULT: '#F8FAFC',
          light: '#ffffff',
          dark: '#F8FAFC',
        },
        text: {
          DEFAULT: '#0f172a',
          light: '#475569',
          muted: '#64748b',
        },
      },
    },
  },
  plugins: [],
}
export default config
