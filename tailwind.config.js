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
        checkmark: "url(../svg/check.svg)",
      },
      color: {
        'slate-blue': "#010922",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
