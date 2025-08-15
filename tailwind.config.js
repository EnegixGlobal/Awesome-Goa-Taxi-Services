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
    },
  },
  plugins: [],
};
