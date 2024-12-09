/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        uberBold: ['UberMoveBold', 'sans-serif'], // Font for bold
        uberMedium: ['UberMoveMedium', 'sans-serif'], // Font for medium
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'UberMoveBold',
            src: 'url("/src/assets/fonts/UberMoveBold.otf") format("opentype")',
            fontWeight: 'bold',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'UberMoveMedium',
            src: 'url("/src/assets/fonts/UberMoveMedium.otf") format("opentype")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        ],
      });
    }),
  ],
};