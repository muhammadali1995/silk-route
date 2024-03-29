const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        navLink: "22px",
        title80: "80px",
        title28: "28px",
        title60: "60px"
      },
      height: {
        headerHeight: "790px",
        slide: '1200px'
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
      maxWidth: {
        extraLg: '1440px',
        md: '968px',
        form:'770px'
      },
      backgroundImage: {
        aboutDesktop:"url('/src/assets/imgs/big_ben.png')",
      }
    },
  },
  plugins: [],
};
