/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
       fontFamily: {
        trademark: ['Active', 'Feeling'],
      },
      colors: {
        primary: '#4F46E5', 
        dark: '#0f172a',     
        light: '#f1f5f9',    
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
