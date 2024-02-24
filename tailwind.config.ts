import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Code", "sans-serif"],
      serif: ["Fira Code", "serif"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#1B3264",
              100: "#03050A",
              200: "#04070F",
              300: "#050A13",
              400: "#070D1A",
              500: "#1B3264",
              600: "#2F58B0",
              700: "#688BD7",
              800: "#B3C5EB",
              900: "#DBE4F8",
            },
            overlay: "#070D1A",
            content1: "#fff",
            foreground: "#fff",
            background: "#03050A",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#2C4C96",
              100: "#090F1E",
              200: "#111E3C",
              300: "#1A2D5A",
              400: "#233C78",
              500: "#2C4C96",
              600: "#3B65C6",
              700: "#6C8BD4",
              800: "#9DB2E3",
              900: "#CED8F1",
            },
            overlay: "#070D1A",
            content1: "#222",
            foreground: "#fff",
            background: "#fff",
          },
        },
      },
    }),
  ],
};
export default config;
