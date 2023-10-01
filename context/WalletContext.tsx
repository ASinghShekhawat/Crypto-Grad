import { Children } from '@/types/generics'
import { Dispatch, createContext, useState } from 'react'

export interface IWalletContext {
  dialog: boolean
  setDialog: Dispatch<boolean>
  isLogged: boolean
  setIsLogged: Dispatch<boolean>
  connectWallet: () => void
}

export const WalletContext = createContext<IWalletContext | null>(null)

export const WalletProvider = ({ children }: Children) => {
  const [isLogged, setIsLogged] = useState(false)
  const [dialog, setDialog] = useState(false)

  const connectWallet = () => {
    setDialog(true)
  }

  return (
    <WalletContext.Provider
      value={{ dialog, setDialog, connectWallet, isLogged, setIsLogged }}
    >
      {children}
    </WalletContext.Provider>
  )
}
