/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      boxShadow: {
        toolTip:
          "0px 12px 24px 0px rgba(134, 140, 152, 0.12), 0px 1px 2px 0px rgba(228, 229, 231, 0.24)",
      },
      fontFamily: {
        ABeeZee: ["ABeeZee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
