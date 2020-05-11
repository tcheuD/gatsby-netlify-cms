import { createMuiTheme, colors, responsiveFontSizes } from '@material-ui/core'

// A custom theme for this app
const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: `#ffffff`,
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#fff`,
    },
    text: {
      secondary: `#fff`,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontSize: '3em',
      fontWeight: 'bolder',
    },
    h2: {
      fontSize: '1.7em',
      fontWeight: 'bolder',
    },
    h3: {
      fontSize: '1.17em',
      fontWeight: 'bolder',
    },
    h4: {
      fontSize: '1em',
      fontWeight: 'bolder',
    },
    h5: {
      fontSize: '.83em',
      fontWeight: 'bolder',
    },
    h6: {
      fontSize: '.67em',
      fontWeight: 'bolder',
    },
    subtitle1: {
      fontSize: '1.2em',
    },
    body1: {
      fontSize: '0.9em',
    },
  },
})

const theme = responsiveFontSizes(myTheme)

export default theme
