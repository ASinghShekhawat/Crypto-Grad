'use client'

import { memo, useCallback } from 'react'
import { FaUserLarge } from 'react-icons/fa6'

export default memo(function UserMessage({ message }: { message: any }) {
  const processMessage = useCallback(() => {
    let msg = ''
    message.forEach((item: any) => {
      msg += item.text.value
    })
    return msg
  }, [message])
  return (
    <div className="flex items-start gap-4 rounded-xl p-4">
      {/* <Image src="/" width={} height={} alt="" className='' /> */}
      <div className="flex h-12 w-12 min-w-[3rem] items-center justify-center overflow-hidden rounded-full bg-themeLightGrey">
        <FaUserLarge className="text-2xl" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="text-sm text-white/40">RIYA</div>
        <div className="w-full whitespace-pre-wrap">{processMessage()}</div>
      </div>
    </div>
  )
})