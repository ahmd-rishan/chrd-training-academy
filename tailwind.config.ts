import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        card: "#131D36",
        cardHover: "#1B2645",
        subtleBorder: "rgba(255, 255, 255, 0.08)",
        emerald: {
          500: "#00C896",
          600: "#00A87E",
          soft: "rgba(0, 200, 150, 0.15)",
        },
        purple: {
          500: "#7C5CFF",
          600: "#6947F2",
          soft: "rgba(124, 92, 255, 0.15)",
        },
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8",
        textMuted: "#64748B",
      },
      borderRadius: {
        xl: "16px",
        lg: "12px",
        md: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
