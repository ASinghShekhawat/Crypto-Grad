'use client'

import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { IDrawerGeneric } from '@/types/navbar'
import ConnectWalletDialog from './ConnectWalletDialog'
import useWallet from '@/hooks/useWallet'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useAccount } from 'wagmi'

const ConnectWallet = ({ drawer }: IDrawerGeneric) => {
  const { dialog, setDialog, connectWallet, logout } = useWallet()
  const { address, isConnected } = useAccount()
  return (
    <>
      <div
        className={`flex items-center ${
          drawer ? 'w-full flex-col gap-2' : 'gap-4'
        }`}
      >
        {isConnected ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={`flex min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6 ${
                  drawer ? 'w-full' : ''
                }`}
              >
                {address?.substring(0, 5)}...
                {address?.substring(address?.length - 4, address?.length)}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-themeBlack shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-2">
                  <Menu.Item>
                    <button onClick={logout} className={`px-3 py-1`}>
                      Logout
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <>
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
          </>
        )}
      </div>
      <ConnectWalletDialog isOpen={dialog} setIsOpen={setDialog} />
    </>
  )
}

export default ConnectWallet
