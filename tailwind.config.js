/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-radial-gradient': 'radial-gradient(circle, #346482 0%, #0f172a 95%)',
      }
    },
  },
  plugins: [],
}

