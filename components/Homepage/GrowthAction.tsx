'use client'

import { useAccount } from 'wagmi'
import Button from '../shared/Button'
import useWallet from '@/hooks/useWallet'
import Toast from '../shared/Toast'
import { useEffect, useState } from 'react'

export default function GrowthActions() {
  const { isConnected } = useAccount()
  const [referralId, setReferralId] = useState('')
  const { connectWallet } = useWallet()

  useEffect(() => {
    const referralId = localStorage.getItem('referralId')
    referralId && setReferralId(referralId)
  }, [])
  return (
    <div className="flex justify-center md:justify-start">
      {isConnected ? (
        <Toast
          refId={referralId}
          disabled={referralId ? false : true}
          className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          Share Referral
        </Toast>
      ) : (
        <Button onClick={connectWallet} className="!text-base !font-light">
          Connect Wallet & Generate Referal link
        </Button>
      )}
    </div>
  )
}
