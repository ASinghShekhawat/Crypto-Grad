'use client'

import Image from 'next/image'
import {
  LuThumbsUp,
  LuThumbsDown,
  LuRefreshCcwDot,
  LuShare2,
} from 'react-icons/lu'
import { FaRegCopy } from 'react-icons/fa6'
import { memo, useCallback, useEffect, useState } from 'react'

const AssistantMessage = ({ message }: { message: any }) => {
  const [parsedMessage, setParsedMessage] = useState('')
  const processMessage = useCallback(() => {
    let msg = ''
    message.forEach((item: any) => {
      msg += item.text.value
    })
    setParsedMessage(msg)
  }, [message])

  useEffect(() => {
    processMessage()
  }, [processMessage])

  return (
    <div className="flex items-start gap-4 bg-themeNavBlack p-4">
      <Image
        src="/CgAi/ChatAi/cgLogoBlue.svg"
        width={40}
        height={40}
        alt=""
        className="h-12 w-12 rounded-full"
      />
      <div className="flex w-full flex-col gap-1">
        <div className="text-sm text-white/40">CG AI</div>
        <div className="w-full whitespace-pre-wrap">{parsedMessage}</div>
        <div className="mt-4 flex flex-col items-end border-t border-white/30 pt-4">
          <div className="flex gap-2">
            <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <LuThumbsUp />
            </button>
            <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <LuThumbsDown />
            </button>
            <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <FaRegCopy />
            </button>
            <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <LuRefreshCcwDot />
            </button>
            <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <LuShare2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AssistantMessage)
