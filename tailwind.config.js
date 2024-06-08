/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        syne: ['Syne', 'sans-serif']
      }
    },
  },
  plugins: [],
}

