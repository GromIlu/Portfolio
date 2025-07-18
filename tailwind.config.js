/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in /src
  ],
  theme: {
    extend: {
       fontFamily: {
        trademark: ['Active', 'Feeling'], // 'trademark' is your custom font name
      },
      colors: {
        primary: '#4F46E5',  // Indigo-600
        dark: '#0f172a',     // Slate-900
        light: '#f1f5f9',    // Slate-100
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
