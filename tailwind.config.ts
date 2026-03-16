import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#eef1ff',
          200: '#e0e6ff',
          300: '#c7d2ff',
          400: '#a8b8ff',
          500: '#8a9eff',
          600: '#6b7eff',
          700: '#5c6eff',
          800: '#4d5eff',
          900: '#3d4dcc',
          950: '#2d3a99',
        },
        accent: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c1dfff',
          300: '#a2cfff',
          400: '#83bfff',
          500: '#64afff',
          600: '#459fff',
          700: '#268fff',
          800: '#1a7ae6',
          900: '#1466b3',
        },
        background: {
          DEFAULT: '#f9fafa',
          light: '#ffffff',
          dark: '#f3f4f6',
        },
        text: {
          DEFAULT: '#20303c',
          light: '#4b637b',
          muted: '#697d91',
        },
      },
    },
  },
  plugins: [],
}
export default config
