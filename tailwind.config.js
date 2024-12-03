/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: "#30b9b1",
        deepgreen: "#1a3442",
        forest: "#3D696D",
        rose: "#ffd6db",
        peach: "#fffacc",
        white: "#ffffff",
        gray: "#8492a6",
      },
      fontFamily: {
        sans: ["Host Grotesk", "sans-serif"],
        serif: ["Libre Baskerville", "serif"],
      },
      zIndex: {
        "1px": "1px",
      },
      // content: {
      //   empty: [""],
      // },
    },
  },
  plugins: [],
};
