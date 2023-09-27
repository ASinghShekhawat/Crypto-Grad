'use client'

import { WalletProvider } from '@/context/WalletContext'
import { Children } from '@/types/generics'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const Providers = ({ children }: Children) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <WalletProvider>{children}</WalletProvider>
      </ThemeProvider>
    </>
  )
}

export default Providers
