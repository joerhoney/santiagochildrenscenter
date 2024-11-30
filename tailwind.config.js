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
        deepgreen: "#121f26",
        forest: "#3D696D",
        white: "#ffffff",
        aqua: "#30b9b1",
        rose: "#ffd6db",
        peach: "#fff5cc",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
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
