/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },

    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        primary: "#16A560",
        secondary: "#13C296",
        primary_dark: "#212B36",
        // secondary_dark: "",
        btn_primary: '#059450',
        light_dark: '#637381',
        light_primary: '#B5ECC5',
      },

      // backgroundImage: {
      //   'hero-pattern': "url('/hero_img_bg.jpg')",
      // },

      boxShadow: {
        input: "0px 7px 20px rgba(0,0,0,0.03)",
        "switch-1": "0px 0px 5px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
}