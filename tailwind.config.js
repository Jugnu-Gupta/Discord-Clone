/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sm' : {'max' : '450px'},
        'md' : {'max' : '768px'},
        'lg' : {'max' : '1020px'},
        'ulg' : {'min' : '1020px'}
      },
      colors:{
        'brand': '#3e4df0',
        'greyple': '#99aab5',
        'dark-not-black': '#2c2f33',
        'focus-border': '#00b0f4',
        'status-green': '#43b581',
        'text-link': '#00b0f4',
        'off-white': '#f6f6f6',
        'white': '#fff',
        'not-quite-black': '#23272a',
        'black': '#000',
        'ekko-red': '#de2761'
      }
    },
  },
  plugins: [],
  fontFamily:{
    Whitney:["./fonts/Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  }
}

