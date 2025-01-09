/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        gudea: ["Gudea", "sans-serif"],
        jaini: ["Jaini", "sans-serif"],
      },
    },
  },
  plugins: [],
};
