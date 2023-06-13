import { Montserrat } from 'next/font/google'

import { colors } from '@mui/material'
import { createTheme } from '@mui/material'

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Montserrat', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#efefef',
      paper: colors.common.white,
    },
    primary: {
      main: '#5836A4',
    },
    secondary: {
      main: '#FFB605',
    },
    text: {
      primary: colors.common.black,
      secondary: '#8f96a3',

    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export default theme;