/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        beauty: {
          light: '#FFF9F5', // Soft flesh/warm white
          nude: '#F5E6E0', // Subtle nude
          pink: '#EDC7B7', // Dusty pink
          gold: '#D4AF37', // Classic gold
          accent: '#123C69', // Deep contrast
        }
      },
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        brand: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
