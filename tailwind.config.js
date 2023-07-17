/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGray: "#2c2c2c",
        primary: "#8fb3ff",
        secondary: "#c9f3f3",
        bostonBlue: "#2b78c5",
        baliHai: "#83A2B5",
        fedora: "#746671",
        cloudBurstBlue: "#223051",
      },
    },
  },
  plugins: [],
};
