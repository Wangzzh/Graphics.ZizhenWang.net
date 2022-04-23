import { createTheme } from '@mui/material/styles'

export const mainTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#21113d',
    },
    secondary: {
      main: '#881fb1',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
      fontFamily: '"Open Sans",sans-serif'
  }
});