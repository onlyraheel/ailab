/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lynx-blue': '#0077c8',
        'lynx-dark': '#1a202c',
        'lynx-gray': '#2d3748',
        'lynx-light-gray': '#4a5568',
      },
    },
  },
  plugins: [],
}
