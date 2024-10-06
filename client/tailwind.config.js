/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        TLHOrange: "#ff7043",
        TLHblue: "#304ffe",
        TLHGray: "#c5cae9",
      },
    },
  },
  plugins: [],
};
