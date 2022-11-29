/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{components,pages}/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    dropShadow: {
      DEFAULT: "0 0 20px rgba(217,187,236,1)",
      sm: "0 0 5px rgba(217,187,236,1)",
      md: "0 0 10px rgba(217,187,236,1)",
      lg: "0 0 15px rgba(217,187,236,1)",
      xl: "0 0 30px rgba(217,187,236,1)",
      none: "none",
    },
    boxShadow: {
      DEFAULT: "0 0 20px 5px rgba(0,0,0,0.7)",
      sm: "0 0 20px 5px rgba(0,0,0,0.7)",
      md: "0 0 20px 5px rgba(0,0,0,0.7)",
      lg: "0 0 30px 7px rgba(0,0,0,0.8)",
      xl: "0 0 40px 10px rgba(0,0,0,0.9)",
      none: "none",
    },
    extend: {
      colors: {
        white: "#ECE8EF",
        mauve: "#948B9AE5",
        "mauve-light": "#948B9A",
        "mauve-dark": "#5D5366",
        "mauve-darker": "#3D3446",
        "mauve-darkest": "#2A2A2A",
      },
      fontFamily: {
        elianto: ["Elianto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
