/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./catalog/**/*{html,js}",
    "./basket/**/*{html,js}",
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
