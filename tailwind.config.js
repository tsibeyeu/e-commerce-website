/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';  
import daisyui from 'daisyui';  
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  
    './index.html',  
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,  
    daisyui,  
  ],
}

