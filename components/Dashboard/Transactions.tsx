'use client'

import { Pagination } from '@mui/material'
import { useState } from 'react'

const SKIP = 10

export default function Transactions() {
  const [page, setPage] = useState(1)
  const [totalData, setTotalData] = useState(5000)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(2)
  const [reportData, setReportData] = useState([
    {
      timestamp: '05-09-2023 09:32 AM UTC',
      wallet: 'Metamask',
      amount: '0.30203',
      buyAmount: '75',
      buyCurrency: 'BUSD',
      hash: '0x9B619171354e571aaFd291c108ef2E0A90939FE4',
    },
    {
      timestamp: '05-09-2023 09:32 AM UTC',
      wallet: 'Metamask',
      amount: '0.30203',
      buyAmount: '75',
      buyCurrency: 'BUSD',
      hash: '0x9B619171354e571aaFd291c108ef2E0A90939FE4',
    },
    {
      timestamp: '05-09-2023 09:32 AM UTC',
      wallet: 'Metamask',
      amount: '0.30203',
      buyAmount: '75',
      buyCurrency: 'BUSD',
      hash: '0x9B619171354e571aaFd291c108ef2E0A90939FE4',
    },
    {
      timestamp: '05-09-2023 09:32 AM UTC',
      wallet: 'Metamask',
      amount: '0.30203',
      buyAmount: '75',
      buyCurrency: 'BUSD',
      hash: '0x9B619171354e571aaFd291c108ef2E0A90939FE4',
    },
  ])
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-6 text-5xl font-bold md:col-span-3">
        Private Sale Transactions
      </div>
      <div className="flex flex-col overflow-x-scroll md:overflow-auto">
        <div className="grid min-w-[800px] grid-cols-5 rounded-xl bg-themeBgBlack p-4 font-semibold md:min-w-0">
          <div>
            TX <br />
            Timestamp
          </div>
          <div>
            Deposit <br />
            Wallet
          </div>
          <div>
            Buy Amount <br />
            (CG Token)
          </div>
          <div>
            Buy <br />
            Amount
          </div>
          <div>
            TX <br />
            Hash
          </div>
        </div>
        {reportData.map((data) => (
          <div className="grid min-w-[800px] grid-cols-5 rounded-xl p-4 font-light md:min-w-0">
            <div>{data.timestamp}</div>
            <div className="truncate">{data.wallet}</div>
            <div className="truncate">{data.amount}</div>
            <div className="truncate">
              {data.buyCurrency} {data.buyCurrency}
            </div>
            <div className="truncate">{data.hash}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 text-xs">
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
      </div>
    </div>
  )
}
