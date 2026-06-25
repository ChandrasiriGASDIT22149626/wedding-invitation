export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        emerald: {
          DEFAULT: '#2D5F4F',
          dark: '#1a3a2e',
          light: '#3d7f6f',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E8D5A8',
          light: '#F5E6C8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
    },
  },
  plugins: [],
}