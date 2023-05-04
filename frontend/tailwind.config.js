/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FEFEFE",
      primary: "#282E30",
      secondary: "#5E958D",
      accent: "#DAC185",
      gray: "#FBFCFD",
    },
    fontFamily: {
      main: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
