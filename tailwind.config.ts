import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e91e9",
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae2fd",
          "300": "#7dc9fc",
          "400": "#38abf8",
          "500": "#0e91e9",
          "600": "#0278c7",
          "700": "#0362a1",
          "800": "#075385",
          "900": "#0c476e",
          "950": "#082f49",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fba63c",
          "50": "#fff7ed",
          "100": "#ffecd5",
          "200": "#fed9aa",
          "300": "#fdc074",
          "400": "#fba63c",
          "500": "#f99416",
          "600": "#ea870c",
          "700": "#c2710c",
          "800": "#9a5e12",
          "900": "#7c4d12",
          "950": "#432807",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
          foreground: "#ffffff",
        },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        accent: {
          DEFAULT: "#0e91e9",
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae2fd",
          "300": "#7dc9fc",
          "400": "#38abf8",
          "500": "#0e91e9",
          "600": "#0278c7",
          "700": "#0362a1",
          "800": "#075385",
          "900": "#0c476e",
          "950": "#082f49",
          foreground: "#ffffff",
        },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
