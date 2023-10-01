import { IWalletContext, WalletContext } from '@/context/WalletContext'
import { useContext } from 'react'

const useWallet = () => {
  const { dialog, setDialog, connectWallet, isLogged, setIsLogged } =
    useContext(WalletContext) as IWalletContext
  return { dialog, setDialog, connectWallet, isLogged, setIsLogged }
}

export default useWallet
