/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        incognito: ["var(--incognito)"],
        inter: ["var(--inter)"],
      },
      colors: {
        "primary-color": "#eee",
        "secondary-color": "#fff",
        "tertiary-color": "#f5f5f5",
        "primary-bg": "rgba(23, 23, 23, 0.4)",
        "secondary-bg": "rgba(25, 25, 25, 0.4)",
        "primary-bg2": "rgba(23, 23, 23, 1)",
      },
      boxShadow: {
        "line-light": "rgba(21, 21, 21, 0.1) 0px 1px 0px",
        "line-dark": "rgb(22, 22,22) 0px 1px 0px",
      },
      gridTemplateColumns: {
        custom: "1.2fr 1fr",
      },
      backgroundImage: {
        noise:
          "url('/noise.webp')",
      },
      backgroundPosition: {
        zero: "0 0",
      },
    },
  },
  plugins: [],
};
