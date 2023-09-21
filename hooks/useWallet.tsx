import { IWalletContext, WalletContext } from "@/context/WalletContext";
import { useContext } from "react";

export const useWallet = () => {
  const { loading, isLoggedIn, connectWallet } = useContext(
    WalletContext
  ) as IWalletContext;
  return { loading, isLoggedIn, connectWallet };
};
