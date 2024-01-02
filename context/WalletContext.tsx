import { Children } from '@/types/generics'
import { Dispatch, createContext, useState } from 'react'
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { disconnect } from '@wagmi/core'
import { useRouter } from 'next/navigation'
import { login } from '@/services/user'
import { goerli, mainnet } from 'viem/chains'
import { chain } from '@/services/web3Service'

export interface IWalletContext {
  isLoggedIn: boolean;
  loading: boolean;
  referralId: string;
  dialog: boolean;
  loginUser : (walletAddress:string, referralId?:string,) =>Promise<void>;
  setDialog: Dispatch<boolean>;
  connectWallet: () => void;
  logout: () => void;
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [mainnet, goerli, ]
const defaultChain = chain
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
const themeVariables = {
  '--w3m-font-family': 'DM Sans, sans-serif',
  '--w3m-z-index': 100,
  '--w3m-color-mix': '#262626',
  '--w3m-accent': '#262626',
}

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain,
  themeMode: 'dark',
  themeVariables,
})

export const WalletContext = createContext<IWalletContext | null>(null)

export const WalletProvider = ({ children }: Children) => {
  const [dialog, setDialog] = useState(false)
  const { open } = useWeb3Modal()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [referralId, setReferralId] = useState("");

  const connectWallet = () => {
    console.log('wllet')
    open()
    // setDialog(true)
  }

  const loginUser = async (walletAddress: string, referralId?: string) => {
    try {
      const res = await login(walletAddress, referralId);
      setReferralId(res.data.referralId);
      localStorage.setItem("accessToken", res.data.authToken);
      localStorage.setItem("referralId", res.data.referralId);
      localStorage.setItem("walletAddress", walletAddress);
      localStorage.setItem("referrer", JSON.stringify(res.data?.referredBy))
      setIsLoggedIn(true);
      setLoading(false)
    } catch (err) {
      console.log({err})
      setLoading(false)
      throw err
    }
  };

  const logout = () => {
    disconnect()
    localStorage.clear();
    setIsLoggedIn(false);
    setLoading(false);
    router.push('/')
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <WalletContext.Provider
        value={{
          dialog,
          setDialog,
          connectWallet,
          loginUser,
          logout,
          isLoggedIn,
          loading,
          referralId,
        }}
      >
        {children}
      </WalletContext.Provider>
    </WagmiConfig>
  )
}
