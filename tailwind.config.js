/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}", // if using the App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#00AEEF",
          dark: "#0086BE",
          light: "#33CFFF",
        },
        secondary: {
          DEFAULT: "#1C1C1C",
          dark: "#121212",
          light: "#2A2A2A",
        },
        accent: {
          DEFAULT: "#FFB800",
          dark: "#CC9300",
          light: "#FFD24D",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 174, 239, 0.6)",
      },
    },
  },
  plugins: [],
};
