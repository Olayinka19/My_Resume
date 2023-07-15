/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      columns: {
        '4xs': '14rem',
      }
    },
  },
  plugins: [],
}

