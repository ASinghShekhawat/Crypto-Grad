'use client'

import Button from '../shared/Button'
import { ChangeEvent, FormEvent, useState } from 'react'
import WaitlistDialogJoin from '../Homepage/WaitlistDialogJoin'
import WaitlistDialogRank from '../Homepage/WaitlistDialogRank'

const JoinTheBeta = () => {
  const [openJoin, setOpenJoin] = useState(false)
  const [openRank, setOpenRank] = useState(false)
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    otp: '',
    referral: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInfo({
      ...info,
      [name]: value,
    })
  }

  const nextFn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOpenJoin(false)
    setOpenRank(true)
  }
  return (
    <>
      <Button onClick={() => setOpenJoin(true)}>Join the Beta</Button>
      <WaitlistDialogJoin
        isOpen={openJoin}
        setIsOpen={setOpenJoin}
        next={nextFn}
        info={info}
        handleChange={handleChange}
        loading={loading}
      />
      <WaitlistDialogRank isOpen={openRank} setIsOpen={setOpenRank} />
    </>
  )
}

export default JoinTheBeta
