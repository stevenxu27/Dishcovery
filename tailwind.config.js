/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        "my-gray": "#A3A3A3",
      },
      transitionTimingFunction: {
        // "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        // "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        slowEase: "cubic-bezier(0.7, 0, 0.2, 1)",
        fastEast: "cubic-bezier(0.62, 0.61, 0.02, 1)",
        fastfastEast: "cubic-bezier(0.5,0,0,1)",
      },
      transitionProperty: {
        width: "width",
        all: "all, border-radius",
      },
      keyframes: {
        spring: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        spring: "spring 0.5s cubic-bezier(0.2, 0.8, 0.4, 1.2)",
        'scroll-slow': 'scroll 25s linear infinite',
        'pulse-slow': 'pulse 4s ease-slowEase infinite',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #000000, #000000, #111827)',
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
