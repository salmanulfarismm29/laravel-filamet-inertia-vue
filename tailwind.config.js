import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        eina: ['Eina04', 'sans-serif'], // like "var(--font-eina)" in Next.js
      },
      colors: {
        brand: {
          primary: {
            DEFAULT: '#EB5326',
            dark: '#C1431F',
            light: '#F69682',
          },
          secondary: {
            DEFAULT: '#1E293B',
            dark: '#0F172A',
            light: '#334155',
          },
          accent: {
            DEFAULT: '#F5A623',
            dark: '#D4881C',
            light: '#FFBE4D',
          },
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
          neutral: {
            100: '#F8FAFC',
            200: '#F1F5F9',
            300: '#E2E8F0',
            400: '#CBD5E1',
            500: '#94A3B8',
            600: '#64748B',
            700: '#475569',
            800: '#334155',
            900: '#1E293B',
          },
        },
      },
    },
  },
  plugins: [],
})
