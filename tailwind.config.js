/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      sans: ['Hind Vadodara', 'sans-serif'],
      serif: ['DM Serif Text', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}

