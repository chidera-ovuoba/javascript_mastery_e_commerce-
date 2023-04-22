module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
   theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
       'lg': { 'max': '915px' },
       'lg_1':{'max':'710px'},
       'md': { 'max': '610px' },
       'md_1':{'max':'460px'},
       'sm': { 'max': '400px' },
       'xs':{'max':'350px'}
     },
      extend: {
        gridAutoColumns: {
          '1fr': 'minmax(150px, 1fr)',
        },
        gridTemplateColumns: {
          // Simple 16 column grid
        //  'footer2': 'repeat(2, minmax(0, 1fr))',

          // Complex site-specific column configuration
         'footer2': 'calc(50%) calc(50% - 2rem)',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
