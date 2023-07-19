/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGray: "#2c2c2c",
        bostonBlue: "#2b78c5",
        baliHai: "#83A2B5",
        fedora: "#746671",
        cloudBurstBlue: "#223051",
        rum: "#826C85",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};
