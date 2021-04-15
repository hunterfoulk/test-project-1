module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      '0': '0',
      '200': '200px',
      '300': '300px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '50': '50px',
      '80': '80px',
      '90': '90px',
      '300': '300px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': "100vh"
    },
    minWidth: {
      '0': '0',
      '50': '50px',
      '200': '200px',
      '300': '300px',
      '330': '330px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': "100vh"
    },
    maxWidth: {
      '0': '0',
      '50': '50px',
      '200': '200px',
      '300': '300px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': "100vh"
    },
    screens: {
      'sm': '500px',

      'md': '800px',

      'lg': '1024px',


      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/images/bg1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
