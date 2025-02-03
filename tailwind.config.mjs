/** @type {import('tailwindcss').Config} */
// prettier-ignore
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 96%)",
      gray: {
        50: "hsl(0, 0%, 98%)",
        100: "hsl(0, 0%, 91%)",
        200: "hsl(0, 0%, 83%)",
        300: "hsl(0, 0%, 75%)",
        400: "hsl(0, 0%, 67%)",
        500: "hsl(0, 0%, 60%)",
        600: "hsl(0, 0%, 53%)",
        700: "hsl(0, 0%, 46%)",
        800: "hsl(0, 0%, 38%)",
        900: "hsl(0, 0%, 30%)",
      },
      blue: {
        50: "hsl(200, 100%, 98%)",
        100: "hsl(200, 100%, 91%)",
        200: "hsl(200, 100%, 83%)",
        300: "hsl(200, 100%, 75%)",
        400: "hsl(200, 100%, 67%)",
        500: "hsl(200, 100%, 60%)",
        600: "hsl(200, 100%, 53%)",
        700: "hsl(200, 100%, 46%)",
        800: "hsl(200, 100%, 38%)",
        900: "hsl(200, 100%, 30%)",
      },
      black: "hsl(0, 0%, 10%)",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
