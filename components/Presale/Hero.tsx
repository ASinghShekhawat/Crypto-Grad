'use client'

import { ICurrency, currencies } from '@/utils/currencies'
import { makeMeTwoDigits } from '@/utils/numberFix'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { Listbox, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'
import useWallet from '@/hooks/useWallet'
import {
  buyToken,
  endSaleTime,
  getDecimals,
  getEventValue,
  getTokenAmount,
} from '@/services/web3Helper'
import { useAccount } from 'wagmi'
import { useSearchParams } from 'next/navigation'
import { addTransaction } from '@/services/transaction'
import { addComission } from '@/services/comission'
import { userWalletByRefId } from '@/services/user'

export default function Hero() {
  const [timer, setTimer] = useState(Date.now() + 5000)
  const [pledged, setPledged] = useState(0)
  const [currency, setCurrency] = useState<ICurrency | null>(null)
  const [amount, setAmount] = useState<number | undefined>(undefined)
  const [currencyValue, setCurrencyValue] = useState(0)
  const { isLoggedIn, connectWallet } = useWallet()
  const [price, setPrice] = useState<number>()
  const [walletType, setWalletType] = useState('')
  const { address, isConnected } = useAccount()
  const search = useSearchParams()

  const getTokenPrice = async () => {
    const price = await getTokenAmount(currency?.address, amount)
    setPrice(price)
  }

  const getEndDate = async () => {
    const endDateTimeStamp = await endSaleTime()
    setTimer(endDateTimeStamp * 1000)
  }

  const getWalletType = () => {
    const wallet = localStorage.getItem('wagmi.wallet')
    if (wallet === 'walletConnect') setWalletType('Mobile Wallet')
    else setWalletType('Browser Wallet')
  }

  useEffect(() => {
    if (isConnected) getWalletType()
  }, [address])

  useEffect(() => {
    setTimer(1706725800000)
  }, [])

  const buyCGTokens = async () => {
    const refId = search.get('ref')
    const user: any = refId && (await userWalletByRefId(refId))
    const res = await buyToken(
      amount,
      address,
      user?.data?.walletAddress,
      currency?.address
    )
    const tokenBought = await getEventValue(res, 'TokensBought')
    const referalIncomeDistributed = await getEventValue(
      res,
      'ReferalIncomeDistributed'
    )
    const transactionObj = {
      baseAmount: Number(tokenBought.usdAmount) / Math.pow(10, 18),
      tokenQuantity: Number(tokenBought.tokenAmount) / Math.pow(10, 18),
      transactionHash: res?.transactionHash,
      token: tokenBought.token,
      depositWallet: walletType,
    }
    await addTransaction(transactionObj)
    if (referalIncomeDistributed) {
      for (let i = 0; i < referalIncomeDistributed?.length; i++) {
        const obj = referalIncomeDistributed[i]
        const decimals = await getDecimals(obj.token)
        const commisonObj = {
          receivingUser: obj.referrer,
          level: Number(obj.level),
          comissionedFrom: obj.user,
          comissionAmount: Number(obj.referalAmount) / Math.pow(10, decimals),
          baseAmount: Number(obj.amountPurchased),
          transactionHash: res?.transactionHash,
          token: obj.token,
        }
        await addComission(commisonObj)
      }
    }
  }

  useEffect(() => {
    getEndDate()
  }, [])

  const getCurrencyValue = () => {
    setCurrencyValue(1)
  }

  useEffect(() => {
    getTokenPrice()
  }, [currency, amount])

  useEffect(() => {
    setCurrency(currencies[0])
  }, [])

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <>Presale Ended!</>
    return (
      <div className="flex items-start gap-2">
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(days)}
          </span>
          <span className="text-2xs font-light">Days</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(hours)}
          </span>
          <span className="text-2xs font-light">Hours</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(minutes)}
          </span>
          <span className="text-2xs font-light">Mins</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(seconds)}
          </span>
          <span className="text-2xs font-light">Secs</span>
        </div>
      </div>
    )
  }

  return (
    <Animated className="relative z-1 flex flex-col items-center justify-center gap-16 bg-gradient-to-b from-[#6754f82b] via-transparent to-transparent px-4 pb-0 pt-16 md:from-transparent md:pt-24 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col text-left">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Cryptograd Presale: <br />
          Secure Your Tokens Now!
        </div>
        <div className="z-10 text-center font-light text-white/80">
          All facilitated by a single game-changing platform. Experience
          cryptocurrency education in an unparalleled way.
        </div>
        <div className="flex w-full justify-center">
          <Button className="mt-4 h-12 w-fit !font-normal">
            Buy & Stake Now
          </Button>
        </div>
      </div>
      <div className="relative z-1 flex w-full items-center justify-center">
        <div className="presaleCardBg relative mt-4 flex w-full flex-col gap-6 rounded-xl border border-[#6754F842] p-4 pt-6">
          <div className="absolute -top-4 w-fit rounded-full border border-themeBorderBlue/25 bg-gradient-to-b from-white/5 to-white/0 px-3 py-1 backdrop-blur-lg">
            Token Presale
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-sm font-medium">Presale ends in:</div>
            <Countdown date={timer} renderer={renderer} />
            <div className="text-sm">
              ${pledged.toLocaleString('en-US')} Pledged of $
              {(2000000).toLocaleString('en-US')} Goal
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xs font-light">
              Choose your preferred currency:
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#6754F842] p-4">
              {currency?.name && (
                <Image
                  src={currency?.icon}
                  alt={currency?.name}
                  width={2000}
                  height={2000}
                  className="h-6 w-6 object-contain"
                />
              )}
              <input
                type="number"
                placeholder="100"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    !e.target.value ? undefined : Number(e.target.value)
                  )
                }
                className="w-full border-none bg-inherit text-base font-medium focus:outline-none"
              />
              <Listbox value={currency} onChange={setCurrency}>
                {({ open }) => (
                  <div className="relative mt-1">
                    <Listbox.Button className="relative flex w-fit items-center gap-2 pl-12">
                      <span className="block truncate">{currency?.name}</span>
                      <FaChevronDown
                        className={`transition-all ${
                          open ? '-rotate-180' : ''
                        }`}
                      />
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlackBg py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {currencies.map((curr, idx) => (
                          <Listbox.Option
                            key={curr.name}
                            className={({ active }) =>
                              `relative flex cursor-pointer select-none items-center gap-3 px-3 py-2 ${
                                active ? 'text-themeBorderBlue' : 'text-white'
                              }`
                            }
                            value={curr}
                          >
                            {({ selected }) => (
                              <>
                                <Image
                                  src={curr.icon}
                                  alt={curr.name}
                                  width={2000}
                                  height={2000}
                                  className="h-4 w-4 object-contain"
                                />
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {curr.name}
                                </span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                )}
              </Listbox>
            </div>
            <div className="flex items-center justify-between text-xs font-light">
              <span>
                1 {currency?.name} = {currencyValue} USD
              </span>
              <span>
                Buying amount = $
                {(isNaN(Number(amount)) ? 0 : Number(amount)) * currencyValue}{' '}
                USD
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xs font-light">Token to Claim</div>
            <div className="flex items-center gap-2 rounded-lg border border-[#6754F842] p-4">
              <Image
                src="/crypto/CG.png"
                alt="CG-TOKEN"
                width={2000}
                height={2000}
                className="h-6 w-6 object-contain"
              />
              <div className="w-full text-base font-medium">{price}</div>
              <div>CG</div>
            </div>
          </div>
          {!isLoggedIn ? (
            <Button className="h-12 !font-normal" onClick={connectWallet}>
              Connect Your Wallet
            </Button>
          ) : (
            <Button className="h-12 !font-normal" onClick={buyCGTokens}>
              Buy Tokens
            </Button>
          )}
        </div>
      </div>
    </Animated>
  )
}
