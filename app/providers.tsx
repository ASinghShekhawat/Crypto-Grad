'use client'

import { Children } from '@/types/generics'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6754f899',
    },
  },
})

const Providers = ({ children }: Children) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Providers
