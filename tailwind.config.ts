import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030705",
        surface: {
          DEFAULT: "#06120b",
          elevated: "#0c1d13",
          card: "rgba(6, 22, 14, 0.75)",
          glass: "rgba(10, 30, 20, 0.6)",
        },
        brand: {
          dark: "#021a0e",
          forest: "#063d22",
          emerald: "#10b981",
          leaf: "#22c55e",
          lime: "#4ade80",
          sprout: "#86efac",
          gold: "#f59e0b",
          amber: "#d97706",
          earth: "#854d0e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hargi": "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15), transparent 70%)",
        "gradient-gold": "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-green": "0 0 35px -5px rgba(34, 197, 94, 0.35)",
        "glow-emerald": "0 0 40px -5px rgba(16, 185, 129, 0.45)",
        "glow-gold": "0 0 35px -5px rgba(245, 158, 11, 0.35)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
