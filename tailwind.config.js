/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter : ['Inter']
      },
      colors : {
        primary : '#1B2316',
        secondary : "#222C1D"
      }
    },
  },
  plugins: [],
}

