/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'darkBlue': '#37306B',
        'purple': '#66347F',
        'blueLight': '#ADBEFD',
        'Yellow': '#FFECA7',
        'whiteCostume': '#F5F6F4',
        'BlackCostume': '#282725',
        'Sand': '#F19038',
      },
    },
  },
  plugins: [],
}