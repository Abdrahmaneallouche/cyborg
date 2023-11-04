/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./cyborg/*{html,js,css}"],
  theme: {
    
    extend: {
      fontSize:{
        'w-1p':'2px',
      },
      screen:{
        'widescreen': {'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw':'(max-aspect-ratio: 13/20)'},
      },
      keyframe:{
        'open-menu':{
          '0%': {transform:' scaleY(0)'},
          '80%': {transform:' scaleY(1.2)'},
          '100%': {transform:' scaleY(1)'},
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forward',
      },
    },
  },
  plugins: [],
}

