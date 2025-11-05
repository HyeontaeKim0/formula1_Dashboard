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
        // 메인 액센트 색상 (Electric Cyan/Blue)
        primary: {
          DEFAULT: "#00D4FF",
          light: "#06E7FF",
          dark: "#00B8E6",
          glow: "#00F5FF",
        },
        // 보조 액센트 색상 (Neon Green)
        secondary: {
          DEFAULT: "#06FFA5",
          light: "#00FF88",
          dark: "#00E68F",
        },
        // 배경 색상 (Deep Slate)
        dark: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
          lighter: "#334155",
        },
        // 기존 호환성을 위한 별칭
        "f1-red": "#00D4FF", // primary로 매핑
        "f1-black": "#0F172A", // dark로 매핑
        "f1-gray": "#1E293B", // dark-light로 매핑
      },
    },
  },
  plugins: [],
};
export default config;
