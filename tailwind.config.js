/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,js}", 
    "./src/content/blog/*.md",
    "./_site/**/.html",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      content: {
        checkmark: "url(../svg/check.svg)",
      },
      colors: {
        primary: {
          "50": "#f1f4ff",
          "100": "#e5e8ff",
          "200": "#ced5ff",
          "300": "#a7b1ff",
          "400": "#767fff",
          "500": "#3f42ff",
          "600": "#2118ff",
          "700": "#1007fa",
          "800": "#0d05d2",
          "900": "#0c06ac",
          "950": "#000080"
         }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
