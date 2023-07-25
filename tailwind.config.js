/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
      },
      colors:{
        'dark-violet': '#8A33FD',
        'black-100': '#3C4242',
        'light-gray': '#807D7E',
        'dark-white': '#BEBCBD',
        'white-100': '#F6F6F6',
        'light-gray-100': '#7F7F7F'
      }
    },
  },
  plugins: [],
};
