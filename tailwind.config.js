/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        }
      },
      fontFamily: {
        'matrix': ['"Qilka"', '"Courier New"', 'monospace'],
        'sans': ['"Qilka"', 'Inter', 'sans-serif'],
        'qilka': ['"Qilka"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
