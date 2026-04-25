/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#111111",
          gold: "#C49A2A",
          cta: "#D84A1B",
          white: "#FFFFFF",
          offwhite: "#F4F2EF",
        },
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
