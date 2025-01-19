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
        fastEase: "cubic-bezier(0.62, 0.61, 0.02, 1)",
        fastfastEase: "cubic-bezier(0.5,0,0,1)",
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
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        loader: {
          "0%": {
            transform: "rotate(0deg)",
            borderRadius: "50%",
          },
          "25%": {
            transform: "rotate(180deg)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          },
          "50%": {
            transform: "rotate(360deg)",
            borderRadius: "50%",
          },
          "75%": {
            transform: "rotate(540deg)",
            borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
          },
          "100%": {
            transform: "rotate(720deg)",
            borderRadius: "50%",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9) translateY(10px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        spring: "spring 0.5s cubic-bezier(0.2, 0.8, 0.4, 1.2)",
        "scroll-slow": "scroll 25s linear infinite",
        "pulse-slow": "pulse 4s ease-slowEase infinite",
        loader: "loader 4s ease-slowEase infinite",
        fadeIn: "fadeIn 0.4s ease-slowEase forwards",
        scaleIn: "scaleIn 0.6s ease-slowEase forwards",
        slideIn: "slideIn 0.4s ease-slowEase forwards",
        slideFromTop: "slideFromTop 0.6s ease-slowEase forwards",
        float: "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(to bottom, #000000, #000000, #111827)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
