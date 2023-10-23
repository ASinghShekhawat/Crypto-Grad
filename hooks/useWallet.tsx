import { IWalletContext, WalletContext } from '@/context/WalletContext'
import { useContext } from 'react'

const useWallet = () => {
  const { dialog, setDialog, connectWallet, logout } = useContext(
    WalletContext
  ) as IWalletContext
  return { dialog, setDialog, connectWallet, logout }
}

export default useWallet
