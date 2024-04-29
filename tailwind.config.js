/** @type {import('tailwindcss').Config} */
export default {
  important: "#root",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        subHeading: ['Poppins', 'sans-serif'],
        base: ['Satoshi', 'sans-serif'],
        logoText: ['Chillax', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}