/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#F9BE02",
        brandBlack: "#111111",
        brandGray: "#1c1c1c",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        pill: "0 4px 24px -4px rgba(0,0,0,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
