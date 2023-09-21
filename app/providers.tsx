"use client";

import { WalletProvider } from "@/context/WalletContext";
import { Children } from "@/types/generics";

const Providers = ({ children }: Children) => {
  return <WalletProvider>{children}</WalletProvider>;
};

export default Providers;
