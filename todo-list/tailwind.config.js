/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        '3xl': '0 0 15px -8px',
      },
    },
  },
  plugins: [],
};
