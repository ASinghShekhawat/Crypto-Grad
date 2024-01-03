'use client'

import { userTransactions } from '@/services/transaction'
import { getName } from '@/utils/currencies'
import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Transactions() {
  const [totalData, setTotalData] = useState(5000)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(1)
  const [reportData, setReportData] = useState<[{
    transactionHash:string,
    createdAt: string,
    depositWallet: string,
    tokenQuantity: number,
    token: string
  }]>()

  const getTransactions = async() => {
    const transaction = await userTransactions(current)
    setTotalData(transaction.total)
    setTotalPages(transaction.total/10)
    setReportData(transaction.transactions)
  }

  useEffect(()=>{
    getTransactions()
  },[current])

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
        { reportData && reportData.map((data, i) => (
          <div
            key={data.transactionHash + 1}
            className="grid min-w-[800px] grid-cols-5 rounded-xl p-4 font-light md:min-w-0"
          >
            <div>{new Date(data.createdAt).toString()}</div>
            <div className="truncate">{data.depositWallet}</div>
            <div className="truncate">{data.tokenQuantity}</div>
            <div className="truncate">
              {getName(data.token)}
            </div>
            <div className="truncate">{data.transactionHash}</div>
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
          Showing {} - {reportData?  (current-1)*10+reportData?.length : 0} out of {totalData}
        </span>
      </div>
    </div>
  )
}
