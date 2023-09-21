import { Children } from "@/types/generics";
import { createContext, useEffect, useState } from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";

export interface IWalletContext {
  loading: boolean;
  isLoggedIn: boolean;
  connectWallet: () => void;
}

const chains = [bscTestnet];
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const WalletContext = createContext<IWalletContext | null>(null);

export const WalletProvider = ({ children }: Children) => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { open, isOpen } = useWeb3Modal();

  const connectWallet = () => {
    open();
  };

  useEffect(() => {
    !isOpen && setLoading(false);
  }, [isOpen]);

  return (
    <WalletContext.Provider value={{ loading, isLoggedIn, connectWallet }}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>

      <Web3Modal
        defaultChain={bscTestnet}
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="dark"
        themeVariables={{
          "--w3m-font-family": "DM Sans, sans-serif",
          "--w3m-z-index": "100",
          "--w3m-background-color": "#20222b",
          "--w3m-accent-color": "#743fe0",
        }}
      />
    </WalletContext.Provider>
  );
};
