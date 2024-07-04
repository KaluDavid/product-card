/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary

      "dark-cyan": "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      zinc: "rgb(245 245 245)",

      // Neutral

      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      "pure-white": "hsl(0, 0%, 100%",
    },
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },

    screens: {
      'mobile': '200px',
      'tablet': '768px',
      'laptop': '1024px',
      'xlaptop': '1280px',
      'desktop': '1440px',
    },

    boxShadow: {
      '3xl': '5px 5px 5px 0 rgba(0, 0, 0, 0.3)',
      '2xl': '0 5px 5px 0 rgba(0, 0, 0, 0.3)',
      'none': '0 0 #0000',
    },

    extend: {},
  },
  plugins: [],
};
