/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cream' : '#F8F8F8',
      'secondary' : '#6E7C7C',
      'navy' : '#0B2A3C',
      'primary' : '#D9832C',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: { },
  },
  plugins: [],
}