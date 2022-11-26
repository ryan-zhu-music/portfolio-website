/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{components,pages}/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    dropShadow: {
      DEFAULT: "0 0 20px rgba(217,187,236,0.3)",
      sm: "0 0 20px rgba(217,187,236,0.3)",
      md: "0 0 20px rgba(217,187,236,0.4)",
      lg: "0 0 30px rgba(217,187,236,0.5)",
      xl: "0 0 40px rgba(217,187,236,0.67)",
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
    },
  },
  plugins: [],
};
