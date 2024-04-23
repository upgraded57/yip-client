/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
      "bubble-gum": "#ff77e9",
      "pink-clr": "#fb5e5d",
    },

    extend: {},
  },
  plugins: [require("daisyui")],
};
