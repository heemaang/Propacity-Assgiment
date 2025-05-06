/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        polygon: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
      },
    },
  },
  plugins: [],
}

