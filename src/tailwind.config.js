/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            sapphire: {
                lightest: '#6288c6',
                lighter: '#4c77bd',
                light: '#3566b5',
                DEFAULT: '#1F55AD',
                dark: '#1c4d9c',
                darker: '#19448a',
                darkest: '#133368'
            },
            gunmetal: '#1F2937',
            snow: '#FAFAFA',
        },
        fontFamily: {
            'sans': ['Montserrat', 'system-ui', 'sans-serif'],
            'body': ['Work Sans', 'system-ui', 'sans-serif'],
        }
    }
  },
  plugins: [],
}
