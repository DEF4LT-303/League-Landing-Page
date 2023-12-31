/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        beaufort: ['Beaufort', 'sans-serif'],
        beafortHeavy: ['BeaufortHeavy', 'sans-serif'],
        spiegel: ['Spiegel', 'sans-serif']
      },
      colors: {
        'primary-orange': '#FF5722'
      }
    }
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'night', 'synthwave', 'dracula']
  },
  plugins: [require('daisyui')]
};
