import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

export default defineConfig({
  /* @twind/with-web-components will use
   * hashed class names in production by default
   * If you don't want this, uncomment the next line
   */
  // hash: false,
  presets: [presetAutoprefix(), presetTailwind()],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'mono'],
    },
    extend: {
      colors: {
        "primary-content": "#dfeaee",
        primary: {
          50: "#f2f6f9",
          100: "#dfeaee",
          200: "#c2d5df",
          300: "#98b8c8",
          400: "#6692aa",
          DEFAULT: "#49738c",
          500: "#49738c",
          600: "#416179",
          700: "#395165",
          800: "#354655",
          900: "#303c49",
          950: "#1c2530",
        },
        "secondary-content": "#ddeae8",
        secondary: {
          50: "#f5f8f7",
          100: "#ddeae8",
          200: "#bad5d3",
          300: "#90b8b6",
          400: "#74a09f",
          DEFAULT: "4f7d7d",
          500: "#4f7d7d",
          600: "#3d6464",
          700: "#345051",
          800: "#2d4142",
          900: "#283839",
          950: "#132020",
        },
        "accent-content": "#dbf2f2",
        accent: {
          50: "#f1faf9",
          100: "#dbf2f2",
          200: "#bbe5e6",
          300: "#8cd1d4",
          DEFAULT: "58b6bc",
          400: "#58b6bc",
          500: "#3a98a0",
          600: "#337d87",
          700: "#2f666f",
          800: "#2d545d",
          900: "#294850",
          950: "#172e35",
        },
      },
    },
  },
});
