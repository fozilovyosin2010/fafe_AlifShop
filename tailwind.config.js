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
        rotateLG: {
          "0%": { transform: "rotate(90deg)" },
          "10%": { transform: "rotate(100deg)" },
          "20%": { transform: "rotate(110deg)" },
          "30%": { transform: "rotate(120deg)" },
          "50%": { transform: "rotate(130deg)" },
          "60%": { transform: "rotate(140deg)" },
          "70%": { transform: "rotate(150deg)" },
          "80%": { transform: "rotate(160deg)" },
          "82%": { transform: "rotate(170deg)" },
          "85%": { transform: "rotate(180deg)" },
          "86%": { transform: "rotate(190deg)" },
          "87%": { transform: "rotate(200deg)" },
          "88%": { transform: "rotate(210deg)" },
          "89%": { transform: "rotate(220deg)" },
          "90%": { transform: "rotate(230deg)" },
          "91%": { transform: "rotate(240deg)" },
          "92%": { transform: "rotate(250deg)" },
          "94%": { transform: "rotate(260deg)" },
          "100%": { transform: "rotate(270deg)" },

          "100%": { display: "none" },
        },
        heightLG: {
          "100%": { height: "0" },
          "90%": { height: "10%" },
          "80%": { height: "20%" },
          "70%": { height: "30%" },
          "60%": { height: "40%" },
          "50%": { height: "50%" },
          "40%": { height: "60%" },
          "30%": { height: "70%" },
          "20%": { height: "80%" },
          "10%": { height: "90%" },
          "0%": { height: "100%" },
        },
        heightLG2: {
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
