/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'movie-dark': '#141414',
        'movie-red': '#E50914',
        'movie-gray': '#808080',
      },
    },
  },
  plugins: [],
}