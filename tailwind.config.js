/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cerulean-blue': '#1053DC',
      'rich-black': '#0C090D',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}
