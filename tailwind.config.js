const { transform } = require("sucrase");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./catalog/**/*{html,js}",
    "./basket/**/*{html,js}",
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      animation: {
        width: "width 1s ease-in-out 1",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(280deg)" },
          "10%": { transform: "rotate(290deg)" },
          "20%": { transform: "rotate(300deg)" },
          "30%": { transform: "rotate(310deg)" },
          "50%": { transform: "rotate(320deg)" },
          "60%": { transform: "rotate(330deg)" },
          "70%": { transform: "rotate(340deg)" },
          "80%": { transform: "rotate(350deg)" },
          "90%": { transform: "rotate(360deg)" },
          "100%": { display: "none" },
        },
        width: {
          "0%": { width: "0" },
          "10%": { width: "10%" },
          "20%": { width: "20%" },
          "30%": { width: "30%" },
          "40%": { width: "40%" },
          "50%": { width: "50%" },
          "60%": { width: "60%" },
          "70%": { width: "70%" },
          "80%": { width: "80%" },
          "90%": { width: "90%" },
          "100%": { width: "100%" },
        },
        width2: {
          "100%": { width: "0" },
          "90%": { width: "10%" },
          "80%": { width: "20%" },
          "70%": { width: "30%" },
          "60%": { width: "40%" },
          "50%": { width: "50%" },
          "40%": { width: "60%" },
          "30%": { width: "70%" },
          "20%": { width: "80%" },
          "10%": { width: "90%" },
          "0%": { width: "100%" },
        },
        rotateLG: {
          // from 0deg to 90deg
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        rotateLG2: {
          // from 0deg to 90deg
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        heightLG: {
          from: { height: "0" },
          to: { height: "90%" },
        },
        heightLG2: {
          from: { height: "90%" },
          to: { height: "0" },
        },
      },
    },
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
