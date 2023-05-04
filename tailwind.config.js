/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  
  theme: {
    extend: {
      screens: {
        "other": {'min':'340px', 'max':'768px'}, 
      },
      colors: {
        darkbg:'#1e293b',
        lightbg:'#e2e8f0',
      },
    },
  },
  plugins: [],
}