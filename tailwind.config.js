/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/public/mandala-bg.jpg')",
        'custom-bg2': "url('/public/manadala-bg2.jpg')",
      },
    },
  },
  plugins: [],
}