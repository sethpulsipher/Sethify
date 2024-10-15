/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,js}", 
    "./src/content/blog/*.md",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      content: {
        checkmark: "url(../assets/svg/check.svg)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
