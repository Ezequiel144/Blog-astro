/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkGreen: {
          300: "#7CD9B2",
          600: "#168560",
          950: "#082E24",
        },
        "back-beige": {
          300: "#DBCDC6",
        },
      },
      gridTemplateColumns: {
        gridPosts: "repeat(auto-fill, minmax(300px, 1fr))",
        gridPostHome: "repeat(auto-fill, minmax(300px,1fr))",
      },
    },
  },
  plugins: [],
};
