/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-hexagon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        'custom-triangle': 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      },
      colors: {
        'custom-start': '#3C049D', // Start color
        'custom-end': '#100425', // End color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #3C049D 39%, #100425 49%)',
      },
      backdropBlur: {
        'custom': '145.8px', // Custom blur value
      },
      fontFamily: {
        inknut: ['"Inknut Antiqua"', 'serif'],
      },
      borderRadius: {
        'custom-large': '50px', // Example of a custom border-radius value
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.clip-custom-hexagon': {
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
        '.clip-custom-triangle': {
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        },
        '.rounded-custom-large': {
          borderRadius: theme('borderRadius.custom-large'),
        },
      }, ['responsive', 'hover']);
    },
  ],
}
