import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modals/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        spanish_viridian: "#04825C",
        stromboli: "#3D6458",
        border_grey: "#D3D6D5",
        lust_red: "#EA1D1D",
        chinese_white: "#D8E7E2",
        light_grey: "#D4D2D5",
        blue:  "#0057FF",
      },
      fontFamily: {
        custom: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Noto Sans"', 'Ubuntu', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
export default config;
