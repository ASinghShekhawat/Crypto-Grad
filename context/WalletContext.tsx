import { Children } from '@/types/generics'
import { Dispatch, createContext, useState } from 'react'
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react'
import { WagmiConfig, useAccount } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { disconnect } from '@wagmi/core'
import { useRouter } from 'next/navigation'

export interface IWalletContext {
  dialog: boolean
  setDialog: Dispatch<boolean>
  connectWallet: () => void
  logout: () => void
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [mainnet]
const defaultChain = mainnet
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

  const connectWallet = () => {
    console.log("Connecting...")
    try {
      open()
    } catch (error) {
      console.log(error)
    }
    // setDialog(true)
  }

  const logout = () => {
    disconnect()
    router.push('/')
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <WalletContext.Provider
        value={{
          dialog,
          setDialog,
          connectWallet,
          logout,
        }}
      >
        {children}
      </WalletContext.Provider>
    </WagmiConfig>
  )
}
