const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        navLink: "22px",
        title80: "80px",
      },
      backgroundImage: {
        headerImage: "url('/src/assets/imgs/big_ben.png')",
      },
      height: {
        headerHeight: "790px",
      },
      colors: {
        delayedYellow: "#FCFE00",
        springGreen: "#39FF14",
        electricPurple: "#5501EE",
        vividPink: "#FF0F7A",
      },
      fontFamily: {
        anton: ['"Anton"', ...defaultTheme.fontFamily.sans],
        ptSansNarrow: ['"Pt Sans Narrow"', ...defaultTheme.fontFamily.sans],
      },
  
    },
  },
  plugins: [],
};
