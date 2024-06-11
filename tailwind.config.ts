import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        priblack: "#1C1C1C",
        secblack: "#242424",
        priwhite: "#FAF9F6",
        secwhite: "#F2F0E8"
      },
      fontSize: {
        heading: "6.875rem",
        subheading: "4.250rem",
        title: "1.625rem",
        small: "0.875rem",
      },
      fontFamily: {
        zarathustra: ["Zarathustra", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
