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
          primary: '#yourPrimaryColor',
          secondary: '#yourSecondaryColor',
          accent: '#yourAccentColor',
        },
      },
    },
  },
  plugins: [],
})
