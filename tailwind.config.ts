import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          light: "#FAFAFA",
          dark: "#0A0A0A",
          card: "#FFFFFF",
          "dark-card": "#111111",
          "dark-input": "#1A1A1A",
        },
        text: {
          primary: "#0A0A0A",
          secondary: "#6B7280",
          fade: "#C5C5C5",
        },
        accent: {
          blue: "#1A6BFF",
          "blue-dim": "#0A3A8A",
          red: "#EF4444",
          green: "#10B981",
        },
        border: {
          light: "#EAEAEA",
          dark: "#2A2A2A",
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
