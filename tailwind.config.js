/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      width: {
        'page-count': '20px',
        'page-delimiter': '8px',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      },
      gridTemplateColumns: {
        'centered-header': '1fr auto 1fr',
      },
    },
  },
  plugins: [],
};
