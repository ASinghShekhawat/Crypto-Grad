'use client'

import Button from '@/components/shared/Button'
import useWallet from '@/hooks/useWallet'
import { ButtonType } from '@/types/buttton'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { LuLogOut } from 'react-icons/lu'

export default function FunctionalNav({
  notification,
}: {
  notification?: boolean
}) {
  const { dialog, setDialog, connectWallet, logout } = useWallet()
  const { address, isConnected } = useAccount()
  const [userTokens, setUserTokens] = useState(0)
  return (
    <div className="flex h-full items-center gap-6">
      <Button type={ButtonType.SECONDARY} className="py-2">
        <span>Tokens</span>
        <span>{userTokens}</span>
        <Image
          src="/WLpictures/coin.png"
          width={80}
          height={81}
          className="h-6 w-6"
          alt=""
        />
      </Button>
      {notification && (
        <Link href={'/CG-AI/notifications'} className="p-2">
          <Image
            src="/Navbar/bell.svg"
            width={18.7}
            height={23.3}
            alt="notifications"
          />
        </Link>
      )}
      <span className="h-full border border-white/20"></span>
      <div className="flex h-fit items-center gap-3">
        <Image
          src="/crypto/BNB.png"
          alt="chain"
          width={2000}
          height={2000}
          className="h-8 w-8"
        />
        <span className="text-white/40">
          {address?.substring(0, 5)}...
          {address?.substring(address?.length - 4, address?.length)}
        </span>
      </div>
      <button onClick={logout} className="flex items-center gap-2">
        <LuLogOut className="text-2xl" />
        <span>Log Out</span>
      </button>
    </div>
  )
}
