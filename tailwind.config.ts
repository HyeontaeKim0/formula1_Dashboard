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
        // 메인 액센트 색상 (F1 레드)
        primary: {
          DEFAULT: "#FF3B30",
          light: "#FF5C52",
          dark: "#E6392E",
          glow: "#FF6B5F",
        },
        // 보조 액센트 색상 (화이트)
        secondary: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
          dark: "#F5F5F5",
        },
        // 배경 색상 (하얀색 계열)
        dark: {
          DEFAULT: "#FFFFFF", // White
          light: "#F5F5F5", // Light Gray
          lighter: "#E5E5E5", // Lighter Gray
        },
        // 기존 호환성을 위한 별칭
        "f1-red": "#FF3B30", // primary로 매핑
        "f1-black": "#0A0A0A", // dark로 매핑
        "f1-gray": "#1A1A1A", // dark-light로 매핑
      },
    },
  },
  plugins: [],
};
export default config;
