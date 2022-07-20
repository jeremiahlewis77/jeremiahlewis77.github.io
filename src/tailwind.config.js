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
            snow: '#FCFCFC',
        },
        fontFamily: {
            'sans': ['Montserrat', 'system-ui', 'sans-serif'],
            'body': ['Work Sans', 'system-ui', 'sans-serif'],
        }
    }
  },
  plugins: [],
}
