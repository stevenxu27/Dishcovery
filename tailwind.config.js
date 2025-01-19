/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue Haas Grotesk", "Arial", "sans-serif"],
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
