/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx }"],
  theme: {
    fontFamily: { lato: "Lato" },

    screens: {
      sm: "480px",
      mdnorm: "768px",
      md: "825px",
      lg: "1200px",
      xl: "1440px",
    },

    colors: {
      ...colors,
      //navbar hover & category hover (D9D9D9) :  trueGray-300
      // unselected navbar item (4B4B4B) :truegray-700
      // selected navbar item (353535): truegray-800
      // searchbar text &icon : truegray-400
      // footer & current bid (606060): truegray-500
      // Yellow Timer : amber-500

      seashell: {
        50: "#f8f8f8",
        100: "#f1f1f1", //background color
        200: "#e4e4e4",
        300: "#d1d1d1",
        400: "#b4b4b4",
        500: "#9a9a9a",
        600: "#818181",
        700: "#6a6a6a",
        800: "#5a5a5a",
        900: "#4e4e4e",
        950: "#282828",
      },
      kgreen: {
        50: "#ebfef6",
        100: "#d0fbe8",
        200: "#a4f6d6",
        300: "#6aebc1",
        400: "#2fd8a6",
        500: "#0abf8f",
        600: "#00916e", //main color
        700: "#007c62",
        800: "#03624e",
        900: "#045041",
        950: "#012d26",
      },
      bordergreen: {
        50: "#f5f8f7",
        100: "#ddeae7", //border color
        200: "#bbd4cf",
        300: "#91b7b0",
        400: "#699891",
        500: "#4f7d77",
        600: "#3e635f",
        700: "#34514e",
        800: "#2d4241",
        900: "#283938",
        950: "#141f1f",
      },
      favred: {
        50: "#fff1f1",
        100: "#ffe1e1",
        200: "#ffc7c7",
        300: "#ffa0a0",
        400: "#ff5656", // Favorite Heart
        500: "#f83b3b",
        600: "#e51d1d",
        700: "#c11414",
        800: "#a01414",
        900: "#841818",
        950: "#480707",
      },
      pomegranate: {
        50: "#fff3f1",
        100: "#ffe3df",
        200: "#ffccc5",
        300: "#ffa99d",
        400: "#ff7664",
        500: "#ff4c34",
        600: "#ee3b23", // Red Timer
        700: "#c8230d",
        800: "#a5210f",
        900: "#882214",
        950: "#4a0d05",
      },
    },
    extend: {
      height: {
        256: "35rem",
      },
    },
  },
  plugins: [],
};
