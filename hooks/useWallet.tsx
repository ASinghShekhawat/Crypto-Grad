import { IWalletContext, WalletContext } from '@/context/WalletContext'
import { useContext } from 'react'

const useWallet = () => {
  const { dialog, setDialog, connectWallet, logout, isLoggedIn,
    loading,
    referralId,
    loginUser
  } = useContext(
    WalletContext
  ) as IWalletContext
  return { dialog, setDialog, connectWallet, logout, isLoggedIn,
    loading,
    referralId,
    loginUser}
}

export default useWallet
