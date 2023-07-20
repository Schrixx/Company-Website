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
        falcon: "#7D6069",
        outerSpace: "#2B3A3D",
      },
      boxShadow: {
        'container': "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)",
        'smallContainer': "rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 1px",
      },
      padding: {
        standard: "95px"
      }
    },
  },
  plugins: [],
};
