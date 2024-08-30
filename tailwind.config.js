/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,js,md}", "./src/content/blog/*.md"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
