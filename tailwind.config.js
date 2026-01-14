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
          primary: '#EB5326',
          'primary-dark': '#C1431F',
          'primary-light': '#F69682',
          secondary: '#1E293B',
          'secondary-dark': '#0F172A',
          'secondary-light': '#334155',
          accent: '#F5A623',
          'accent-dark': '#D4881C',
          'accent-light': '#FFBE4D',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
          'neutral-100': '#F8FAFC',
          'neutral-200': '#F1F5F9',
          'neutral-300': '#E2E8F0',
          'neutral-400': '#CBD5E1',
          'neutral-500': '#94A3B8',
          'neutral-600': '#64748B',
          'neutral-700': '#475569',
          'neutral-800': '#334155',
          'neutral-900': '#1E293B',
        },
      },
    },
  },
  plugins: [],
})
