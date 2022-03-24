module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#D43548',
          blue: '#0D1334',
          light: '#E6F4F2'
        },
        secondary: '#F7F2DC',
        gray: {
          900: '#22252A',
          800: '#464652',
          700: '#5F5F6A',
          600: '#787882',
          500: '#91919A',
          400: '#AAAAB2',
          300: '#C3C3CA',
          200: '#DCDCE2',
          100: '#F5F6FA',
        }
      },
      fontFamily: {
        montserrat: 'Montserrat',
        roboto: 'Roboto Condensed',
      },
      fontSize: {
        'base': '16px',
        'caption': ['1.125rem', {
          lineHeight: '1.688rem'
        }],
        'overline': ['0.875rem', {
          letterSpacing: '0.1em',
          lineHeight: '1rem',
        }],
        'button': ['0.875rem', {
          letterSpacing: '0.1em',
          lineHeight: '1rem',
        }],
        'lead': ['1.25rem', {
          lineHeight: '2rem',
        }],
        'body': ['0.875rem', {
          lineHeight: '1.25rem',
        }],
        'title1': ['4rem', {
          letterSpacing: '-0.02em',
          lineHeight: '4rem',
        }],
        'title2': ['3rem', {
          letterSpacing: '-0.02em',
          lineHeight: '3.625rem',
        }],
        'title3': ['36px', {
          letterSpacing: '-0.02em',
          lineHeight: '2.25rem',
        }],
        'title4': ['1.5rem', {
          letterSpacing: '-0.02em',
          lineHeight: '2.125rem',
        }],
        'title5': ['1.125rem', {
          letterSpacing: '-0.02em',
          lineHeight: '1.563',
        }],
        'title6': ['1rem', {
          letterSpacing: '-0.02em',
          lineHeight: '1.375rem',
        }],
      },
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ]
}