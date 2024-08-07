/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./layouts/**/*.html",
    "./layouts/**/**/*.html",
    "./themes/mv-001/layouts/**/*.html",
    "./themes/mv-001/layouts/**/**/*.html",
    "./themes/mv-001/assets/**/**/*.css",
    "./themes/mv-001/assets/**/**/*.js",
    "./layouts/**/**/*.svg",
    "./content/**/*.md",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}

