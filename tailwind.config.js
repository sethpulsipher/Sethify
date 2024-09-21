/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,js}", 
    "./src/content/blog/*.md",
  ],
  safelist: [
    'checkmark',
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
