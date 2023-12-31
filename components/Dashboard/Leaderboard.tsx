'use client'

import { Pagination } from '@mui/material'
import { useState } from 'react'
import Button from '../shared/Button'

const SKIP = 10

export default function Leaderboard() {
  const [page, setPage] = useState(1)
  const [totalData, setTotalData] = useState(5000)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(2)
  const [reportData, setReportData] = useState([
    {
      rank: 1,
      referrals: '3',
      wallet: '0x9B619171354e571aaFd291c108ef2E0A90939FE4',
      earnings: '75',
    },
  ])
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
          {reportData.map((data, i) => (
            <div
              key={i}
              className="grid min-w-[700px] grid-cols-8 gap-2 rounded-xl p-4 font-light md:min-w-0"
            >
              <div className="col-span-1">{data.rank}</div>
              <div className="col-span-3 truncate">({data.wallet})</div>
              <div className="col-span-2 truncate">{data.referrals}</div>
              <div className="col-span-2 truncate">{data.earnings} USD</div>
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
          <span className="col-span-1 truncate">{4}</span>
          <span className="col-span-3 truncate">You (0xabc...1234)</span>
          <span className="col-span-2 truncate">{20}</span>
          <span className="col-span-2 truncate">{900} USD</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-4">
          <span>Stand A Chance to win perks***</span>
          <Button className="h-12">Invite A friend</Button>
        </div>
      </div>
    </div>
  )
}
