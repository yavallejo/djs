module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#060f20',
          red: '#fd275f',
          blue: '#53c7f0'
        },
        tickets: {
          dark: '#24243c',
          red: '#e35a78',
          pink: '#e25abc',
          violet: '#7e5ae2'
        }
      },
      fontFamily: {
        kanit: 'Kanit',
        saira: 'Saira',
      }
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