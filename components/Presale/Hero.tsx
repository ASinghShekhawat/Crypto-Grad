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

export default function Hero() {
  const [timer, setTimer] = useState(Date.now() + 5000000)
  const [pledged, setPledged] = useState(23000)
  const [currency, setCurrency] = useState<ICurrency | null>(null)
  const [amount, setAmount] = useState<number | undefined>(undefined)
  const [currencyValue, setCurrencyValue] = useState(0)

  const getCurrencyValue = () => {
    setCurrencyValue(1)
  }

  useEffect(() => {
    getCurrencyValue()
  }, [currency])

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
    <Animated className="relative z-1 flex flex-col items-center justify-center gap-16 px-8 py-16 md:py-32 mmd:flex-row mmd:px-16">
      <div className="flex w-full flex-col text-left">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl mmd:text-left">
          Cryptograd Presale: <br />
          Secure Your Tokens Now!
        </div>
        <div className="z-10 text-center font-light mmd:text-left">
          All facilitated by a single game-changing platform. Experience the
          revolution of blockchain in an unparalleled way.
        </div>
        <div className="mdm:justify-start flex w-full justify-center">
          <Button className="mt-4 h-12 w-fit !font-normal">
            Buy & Stake Now
          </Button>
        </div>
      </div>
      <div className="relative z-1 flex w-full items-center justify-center">
        <div className="presaleCardBg relative mt-4 flex w-full flex-col gap-6 rounded-xl border border-[#6754F842] p-4 pt-6">
          <div className="absolute w-fit rounded-full bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-lg px-3 py-1 -top-4 border-themeBorderBlue/25 border">
            Token Presale
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-sm font-medium">Presale ends in:</div>
            <Countdown date={timer} renderer={renderer} />
            <div className="text-sm">
              ${pledged.toLocaleString('en-US')} Pledged of $50,000 Goal
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
              <div className="w-full text-base font-medium">
                {(isNaN(Number(amount)) ? 0 : Number(amount)) *
                  currencyValue *
                  3.75}
              </div>
              <div>CG</div>
            </div>
          </div>
          <Button className="h-12 !font-normal">Connect Your Wallet</Button>
        </div>
      </div>
    </Animated>
  )
}
