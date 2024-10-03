/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      }, 
      keyframes: {
        'nav': {
           '0%': { height:'0' },
          '50%': { height :'50%' },
          '70%': { height :'70%' },
          '100%': { height :'100%' },
          
        }
        ,
      animation: {
        'nav': 'nav 10s  ease-in-out',
        }}
       
    },
    
      screens: {
        'mob_s':'320px',
        // => @media (min-width: 320px) { ... }
        'mob_m':'375px',
        // => @media (min-width:375px) { ... }
        'mob_l':'425px',
        // => @media (min-width: 425px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    
  
  },
  
  plugins: [],
}