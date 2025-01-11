/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', // make sure the paths are correct
  ],
  darkMode: 'class', // optional, depending on your needs
  theme: {
    extend: {},
  },
  plugins: [],
};
