// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//     "./app/**/*.{js,jsx}", // if using the App Router
//   ],
//   theme: {
//   extend: {
//     colors: {
//       brand: {
//         teal: "#27A7B8",
//         tealDeep: "#2F8C97",
//         dark: "#2B2F33",
//         black: "#000000",
//         light: "#FFFFFF",
//       },
//     },
//     backgroundImage: {
//       "brand-gradient":
//         "linear-gradient(135deg, rgba(39,167,184,0.12), rgba(47,140,151,0.08), rgba(255,255,255,1))",
//       "brand-dark-gradient":
//         "linear-gradient(135deg, rgba(39,167,184,0.18), rgba(47,140,151,0.12), rgba(43,47,51,1))",
//     },
//     boxShadow: {
//       brand: "0 20px 40px rgba(39,167,184,0.25)",
//       brandSoft: "0 10px 30px rgba(39,167,184,0.15)",
//     },
//   },
// },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Checksum Brand Colors ──────────────────────────────────
        brand: {
          teal:      "#27A7B8", // Primary accent – buttons, CTAs, icons, links
          "deep-teal": "#2F8C97", // Hover states, secondary buttons, gradients
        },

        // ── Base / Neutral ─────────────────────────────────────────
        base: {
          black:     "#000000", // Headers, nav text, strong contrast
          white:     "#FFFFFF", // Backgrounds, body text on dark sections
          charcoal:  "#2B2F33", // Footer bg, secondary text, cards & panels
        },
      },

      // ── Semantic shortcuts (optional but recommended) ───────────
      backgroundColor: ({ theme }) => ({
        primary:   theme("colors.brand.teal"),
        secondary: theme("colors.brand.deep-teal"),
        dark:      theme("colors.base.charcoal"),
        light:     theme("colors.base.white"),
      }),

      textColor: ({ theme }) => ({
        primary:   theme("colors.brand.teal"),
        secondary: theme("colors.brand.deep-teal"),
        dark:      theme("colors.base.black"),
        light:     theme("colors.base.white"),
        muted:     theme("colors.base.charcoal"),
      }),

      borderColor: ({ theme }) => ({
        primary:   theme("colors.brand.teal"),
        secondary: theme("colors.brand.deep-teal"),
        dark:      theme("colors.base.charcoal"),
      }),

      // ── Gradients using brand colors ───────────────────────────
      backgroundImage: {
        "brand-gradient":    "linear-gradient(135deg, #27A7B8, #2F8C97)",
        "brand-gradient-dark": "linear-gradient(135deg, #2F8C97, #2B2F33)",
        "dark-gradient":     "linear-gradient(135deg, #2B2F33, #000000)",
      },

      // ── Ring / Focus colors ────────────────────────────────────
      ringColor: ({ theme }) => ({
        primary: theme("colors.brand.teal"),
      }),
    },
  },
  plugins: [],
};