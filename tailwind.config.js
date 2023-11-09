/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bluegray-50": "var(--bluegray-50)",
        "bluegray-900": "var(--bluegray-900)",
        gray: "var(--gray)",
        "midnight-purple": "var(--midnight-purple)",
        neutralwhite: "var(--neutralwhite)",
        "purple-gray": "var(--purple-gray)",
        salmon: "var(--salmon)",
        stroke: "var(--stroke)",
      },
      boxShadow: {
        "level-4": "var(--level-4)",
      },
    },
  },
  plugins: [],
};
