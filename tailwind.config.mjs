/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "16px",
          sm: "32px",
        },
      },
      colors: {
        primary: "#12172A",
        blue: "#5C72FF",
        border: "#FFFFFF33",
        "light-black": "#565D76",
        "light-white": "#EAECF0",
        "hero-bg": "#F5F6FA",
      },
      backgroundImage: {
        "border-gradient":
          "linear-gradient(90.93deg, rgba(92, 114, 255, 0.4) 0.21%, rgba(119, 81, 225, 0.4) 55.21%, rgba(167, 116, 231, 0.4) 100.21%)",
      },
      boxShadow: {
        hero: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      dropShadow: {
        "hero-translator": "0px 0px 15.71px #EBEDF7",
      },
      fontSize: {
        "custom-base": "12px",
      },
      lineHeight: {
        100: "100%",
        120: "120%",
        125: "125%",
        140: "140%",
      },
    },
  },
  plugins: [],
};
