/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', // make sure the paths are correct
  ],
  darkMode: 'class', // optional, depending on your needs
  theme: {
    extend: {
      backgroundSize: {
        'grid-pattern': '24px 24px', // Add your custom background-size here
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)', // Define the pattern
      },
    },
  },
  plugins: [],
  
};

