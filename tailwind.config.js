/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Roboto"],
      },
      colors: {
        color: {
          1: "#FF3A54",
          2: "#646464E5",
          3: "#090B12",
          4: "#FAF9F6"
        }
      }
    },
  },
  plugins: [],
}

