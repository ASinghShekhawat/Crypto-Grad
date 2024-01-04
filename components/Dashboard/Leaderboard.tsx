'use client'

import { Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import Button from '../shared/Button'
import { useAccount } from 'wagmi'
import { getLeaderBoard, getUserDetails, getUserRank } from '@/services/user'

const SKIP = 10

export default function Leaderboard() {
  const { address } = useAccount()
  const [page, setPage] = useState(1)
  const [totalData, setTotalData] = useState(5000)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(2)
  const [user, setUser] = useState<any>()
  const [rank, setRank] = useState<number>()
  const [reportData, setReportData] = useState<[{
    referrals: any,
    walletAddress: string,
    commission: number
  }]>()

  const getUserInfo = async() => {
    const user = await getUserDetails()
    setUser(user)
  }

  const userRank = async () => {
    const rank = await getUserRank()
    setRank(rank.rank)
  }

  const leaderBoard = async() => {
    const board = await getLeaderBoard()
    setReportData(board.rank)
  }

  useEffect(()=>{
    getUserInfo()
    userRank()
  },[address])

  useEffect(()=>{
    leaderBoard()
  },[])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="mb-6 text-5xl font-bold md:col-span-2">
        Referral Leaderboard H1
      </div>
      <div className="flex flex-col gap-4 md:col-span-2">
        <div className="flex flex-col overflow-x-scroll md:overflow-auto">
          <div className="grid min-w-[700px] grid-cols-8 gap-2 rounded-xl bg-themeBgBlack p-4 font-semibold md:min-w-0">
            <div className="col-span-1">Rank</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2">Referrals</div>
            <div className="col-span-2">Earnings</div>
          </div>
          {reportData && reportData?.map((data, i) => (
            <div
              key={i}
              className="grid min-w-[700px] grid-cols-8 gap-2 rounded-xl p-4 font-light md:min-w-0"
            >
              <div className="col-span-1">{i+1}</div>
              <div className="col-span-3 truncate">({data?.walletAddress})</div>
              <div className="col-span-2 truncate">{data?.referrals?.length}</div>
              <div className="col-span-2 truncate">{data?.commission?.toFixed(4)} USD</div>
            </div>
          ))}
        </div>
        {/* <div className="flex items-center justify-between gap-4 text-xs">
            <Pagination
              count={totalPages}
              page={current}
              onChange={(e, value) => setCurrent(value)}
              hidePrevButton
              hideNextButton
            />
            <span>
              Showing {} - {50} out of {totalData}
            </span>
          </div> */}
      </div>
      <div className="col-start-3 mb-6 h-12 text-xl font-semibold md:row-start-1">
        Your Rank
      </div>
      <div className="col-start-3 rounded-3xl bg-[#131722CC] md:row-start-2">
        <div className="grid w-full grid-cols-8 gap-2 border-b border-themeTextGrey p-4 font-semibold">
          <span className="col-span-1 truncate">{rank}</span>
          <span className="col-span-3 truncate">You {user?.walletAddress}</span>
          <span className="col-span-2 truncate">{user?.referrals?.length}</span>
          <span className="col-span-2 truncate">{user?.commission.toFixed(4)} USD</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-4">
          <span>Stand A Chance to win perks***</span>
          <Button className="h-12">Invite A friend</Button>
        </div>
      </div>
    </div>
  )
}
