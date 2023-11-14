/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'sm': {'max': '575px'},
      // => @media (max-width: 575px) { ... }

      'md': {'min': '576px', 'max': '767px'},
      // => @media (min-width: 576px and max-width: 767px) { ... }

      'lg': {'min': '768px', 'max':'1023px'},
      // => @media (min-width: 768px and max-width: 1023) { ... }
      
      'xl': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        lumen: "#019AD6",
      },
    },
  },
  plugins: [],
};
