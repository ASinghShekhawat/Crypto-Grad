'use client'

import { MdOutlineInfo } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import Image from 'next/image'
import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { Pagination } from '@mui/material'
import Link from 'next/link'
import GlossaryDialog from './GlossaryDialog'
import LearnMoreDialog from './LearnMoreDialog'
import { claimToken, referalIncome } from '@/services/web3Helper'
import { useAccount } from 'wagmi'
import { userCommission } from '@/services/comission'
import { getUserRank } from '@/services/user'
import { toOrdinal } from 'number-to-words'
import Toast from '../shared/Toast'

export default function ReferAndEarn() {
  const { address } = useAccount()
  const [comission, setComission] = useState(0)
  const [totalData, setTotalData] = useState(5000)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(1)
  const [glossary, setGlossary] = useState(false)
  const [learnMore, setLearnMore] = useState(false)
  const [referralId, setReferralId] = useState<string | null>()
  const [reportData, setReportData] = useState<
    [
      {
        transactionHash: string
        createdAt: string
        depositWallet: string
        comissionAmount: number
        baseAmount: number
        level: number
        comissionedFrom: any
        isClaimed: boolean
      },
    ]
  >()
  const [rank, setRank] = useState<string>()

  const getReferralIncome = async () => {
    const referralIncome = await referalIncome(address)
    setComission(Number(referralIncome.toFixed(4)))
  }

  const getUserComission = async () => {
    const comission: any = await userCommission(current)
    setReportData(comission.receivingUserComission)
    setTotalData(comission.total)
    setTotalPages(comission.total / 10)
  }

  const claimUserToken = async () => {
    return await claimToken(address)
  }

  const userRank = async () => {
    const rank = await getUserRank()
    setRank(toOrdinal(rank.rank))
  }

  useEffect(() => {
    userRank()
  }, [address])

  useEffect(() => {
    getUserComission()
  }, [current])

  useEffect(() => {
    getReferralIncome()
  }, [address])

  useEffect(() => {
    setReferralId(localStorage.getItem('referralId'))
  }, [])

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex w-fit items-center gap-4 rounded-full bg-themeBgBlack p-1 pl-4 text-sm md:col-span-3">
          <div>
            Refer a friend and earn upto{' '}
            <span className="text-themeBorderBlue">15% comission</span>
          </div>
          <Toast
            refId={referralId!}
            disabled={referralId ? false : true}
            className="flex items-center gap-2 rounded-full bg-themeBlackBg px-4 py-1"
          >
            Copy Invite Code <FaRegCopy />
          </Toast>
        </div>
        <div className="flex flex-col gap-4 md:col-span-3">
          <div className="text-5xl font-bold capitalize">
            H1 for the referral dashboard
          </div>
          <div className="text-white/80">
            All facilitated by a single game-changing platform. Experience the
            revolution of blockchain in an unparalleled way.
          </div>
          <div className="flex gap-2 text-white/60">
            *Based on your level, view{' '}
            <div className="underline">T&Cs for more details.</div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-themeViolet bg-themeBgBlack pt-4">
          <div className="flex items-center gap-4 px-4 text-xl font-semibold capitalize">
            Total <br />
            Commission Made
          </div>
          <div className="flex items-center gap-4 px-4">
            <span className="text-5xl font-bold">
              {comission}
              <span className="text-base font-light text-white/60"> USD</span>
            </span>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-themeViolet to-themeBorderBlue py-3 text-sm font-light">
            Refer To Earn More!
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">
          <div className="flex flex-col gap-2 text-xl font-semibold capitalize">
            <div>
              Your <br />
              Affiliate Level
            </div>
            <span className="text-sm font-light text-white/80">
              Start your journey to 7% more!
            </span>
          </div>
          <button className="w-fit text-left text-sm text-themeBorderBlue underline">
            Refer now & unlock level 1
          </button>
        </div>
        <div className="flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">
          <div className="flex flex-col gap-2 text-xl font-semibold capitalize">
            <div>
              Want Learn more & <br />
              dive deeper?
            </div>
            <span className="text-sm font-light text-white/80">
              View your referral stats.
            </span>
          </div>
          <button
            onClick={() => setLearnMore(true)}
            className="w-fit text-left text-sm text-themeBorderBlue underline"
          >
            Know More
          </button>
        </div>
        <button
          onClick={() => setGlossary(true)}
          className="flex items-center gap-2 text-xs font-light md:col-span-3 md:justify-end"
        >
          <MdOutlineInfo className="text-xl" />
          Confused?
          <button className="text-themeBorderBlue underline">
            View Glossary
          </button>
        </button>
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-themeBgBlack p-4 md:col-span-3 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/Mint/crown.png"
              width={169}
              height={154}
              alt=""
              className="h-full w-fit object-contain"
            />
            <div className="flex flex-col text-xl font-semibold capitalize">
              <div className="text-white/60">Your Referral Rank</div>
              <span className="text-4xl font-bold">{rank}</span>
            </div>
          </div>
          <Link
            href="/dashboard?tab=leaderboards"
            className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBorderBlue bg-themeBlack px-4 text-lg font-medium transition-all hover:text-themeVioletText md:px-6"
          >
            View Leaderboard
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-between text-3xl font-bold md:col-span-3">
          H1 for the referral data
          <Button type={ButtonType.SECONDARY} className="text-sm font-light">
            Claim
          </Button>
        </div>
        <div className="flex flex-col overflow-x-scroll md:col-span-3 md:overflow-auto">
          <div className="grid min-w-[900px] grid-cols-6 gap-2 rounded-xl bg-themeBgBlack p-4 font-semibold md:min-w-0">
            <div>
              TX <br />
              Timestamp
            </div>
            <div>
              Affiliate <br />
              Level
            </div>
            <div>
              Affiliate <br />
              Wallet
            </div>
            <div>
              Buy Amount <br />
              (CG Token)
            </div>
            <div>
              My <br />
              Commission
            </div>
            <div>
              TX <br />
              Hash
            </div>
            {/* <div>
              Commission <br />
              Status
            </div> */}
          </div>
          {reportData &&
            reportData.map((data, i) => (
              <div
                key={data.transactionHash + 1}
                className="grid min-w-[900px] grid-cols-6 gap-2 rounded-xl p-4 font-light md:min-w-0"
              >
                <div>{new Date(data.createdAt).toString()}</div>
                <div className="truncate">Lvl {data.level}</div>
                <div className="truncate">
                  {data.comissionedFrom.walletAddress}
                </div>
                <div className="truncate">{data.baseAmount}</div>
                <div className="truncate">{data.comissionAmount}</div>
                <a
                  rel="noreferrer noopener"
                  href={`${process.env.NEXT_PUBLIC_EXPLORER}tx/${data.transactionHash}`}
                  className="truncate"
                >
                  {data.transactionHash}
                </a>
                {/* <div className="flex justify-center">
                  {data?.isClaimed || data?.isClaimed === false ? (
                    <span onClick={claimUserToken}>
                      <Button
                        type={ButtonType.SECONDARY}
                        className="text-sm font-light"
                      >
                        Claim
                      </Button>
                    </span>
                  ) : (
                    'Claimed'
                  )}
                </div> */}
              </div>
            ))}
        </div>

        <div className="col-span-1 flex items-center justify-between gap-4 text-xs md:col-span-3">
          <Pagination
            count={totalPages}
            page={current}
            onChange={(e, value) => setCurrent(value)}
            hidePrevButton
            hideNextButton
          />
          <span>
            Showing {} -{' '}
            {reportData ? (current - 1) * 10 + reportData?.length : 0} out of{' '}
            {totalData}
          </span>
        </div>
      </div>
      <GlossaryDialog isOpen={glossary} setIsOpen={setGlossary} />
      <LearnMoreDialog isOpen={learnMore} setIsOpen={setLearnMore} />
    </>
  )
}
