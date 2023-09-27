"use client";
import Button from "../shared/Button";
import { ButtonType } from "@/types/buttton";
import { IDrawerGeneric } from "@/types/navbar";

const ConnectWallet = ({ drawer }: IDrawerGeneric) => {
  return (
    <div
      className={`flex items-center ${
        drawer ? "flex-col gap-2 w-full" : "gap-4"
      }`}
    >
      <Button
        // loading={loading}
        // onClick={connectWallet}
        className={drawer ? "w-full" : ""}
      >
        Connect Wallet
      </Button>
      <Button
        type={ButtonType.SECONDARY}
        onClick={() => {}}
        className={drawer ? "w-full" : ""}
      >
        Log In
      </Button>
    </div>
  );
};

export default ConnectWallet;
