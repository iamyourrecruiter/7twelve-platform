/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alike': ['Alike', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#161a5a',
        'primary-red': '#8b0000',
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}