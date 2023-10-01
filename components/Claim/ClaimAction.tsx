'use client'

import useWallet from '@/hooks/useWallet'
import Button from '../shared/Button'
import { useState } from 'react'
import ClaimDialog from './ClaimDialog'

const ClaimAction = () => {
  const { isLogged, connectWallet } = useWallet()
  const [dialog, setDialog] = useState(false)

  const handleClaim = () => {
    if (!isLogged) return connectWallet()
    setDialog(true)
  }
  return (
    <>
      <Button onClick={handleClaim} className="relative z-1 !h-12">Claim Now</Button>
      <ClaimDialog isOpen={dialog} setIsOpen={setDialog} />
    </>
  )
}

export default ClaimAction
