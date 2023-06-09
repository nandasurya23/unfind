/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      gray: "#EAEAEA",
      gray2: "#343230",
      white: "#FFFFFF",
      black: "#1E1E1E",
      'blue-primary': '#466DE0',
      'orange-primary': '#FF731D',
      'yellow-primary' : '#F7B026',
      'red-primary': '#FF0000'
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
}