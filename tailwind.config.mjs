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
          sm: "24px",
        },
      },
      colors: {
        primary: "#12172A",
        blue: "#5C72FF",
        "light-black": "#565D76",
      },
      backgroundImage: {
        "border-gradient":
          "linear-gradient(90.93deg, rgba(92, 114, 255, 0.4) 0.21%, rgba(119, 81, 225, 0.4) 55.21%, rgba(167, 116, 231, 0.4) 100.21%)",
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
