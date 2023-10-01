'use client'

import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { IDrawerGeneric } from '@/types/navbar'
import ConnectWalletDialog from './ConnectWalletDialog'
import useWallet from '@/hooks/useWallet'

const ConnectWallet = ({ drawer }: IDrawerGeneric) => {
  const { dialog, setDialog, connectWallet } = useWallet()
  return (
    <>
      <div
        className={`flex items-center ${
          drawer ? 'w-full flex-col gap-2' : 'gap-4'
        }`}
      >
        <Button
          // loading={loading}
          onClick={connectWallet}
          className={drawer ? 'w-full' : ''}
        >
          Connect Wallet
        </Button>
        <Button
          type={ButtonType.SECONDARY}
          onClick={() => {}}
          className={drawer ? 'w-full' : '!px-10'}
        >
          Log In
        </Button>
      </div>
      <ConnectWalletDialog isOpen={dialog} setIsOpen={setDialog} />
    </>
  )
}

export default ConnectWallet
