/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            neutral: '#FFFCF9',
            sapphire: '#1F55AD',
            gunmetal: '#1F2937',
        }
    }
  },
  plugins: [],
}
