'use client'

import Image from 'next/image'
import OpenAI from 'openai'
import { memo, useCallback, useEffect, useState } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { useAccount } from 'wagmi'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, //! Need a backend
})

export default memo(function UserMessage({ message }: { message: any }) {
  const [imageUrl, setImageUrl] = useState('')
  const [parsed, setParsed] = useState('')
  const { address } = useAccount()

  const processMessage = useCallback(() => {
    if (message.content.length <= 0) return
    let msg = ''
    message.content.forEach((item: any) => {
      msg += item.text.value
    })
    setParsed(msg)
  }, [message])

  const getImageUrl = async () => {
    if (!message.file_ids[0]) return
    const imageInfo = await openai.files.retrieve(message.file_ids[0])
    setImageUrl(
      `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}/${imageInfo.id}-${imageInfo.filename}`
    )
  }

  useEffect(() => {
    processMessage()
    getImageUrl()
  }, [processMessage])

  return (
    <div className="flex items-start gap-4 rounded-xl p-4">
      <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center overflow-hidden rounded-full bg-themeLightGrey md:h-12 md:w-12 md:min-w-[3rem]">
        <FaUserLarge className="md:text-2xl" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="text-sm text-white/40">
          {address?.substring(0, 5)}...
          {address?.substring(address?.length - 4, address?.length)}
        </div>
        <div className="w-full whitespace-pre-wrap">{parsed}</div>
        {imageUrl && (
          <div className="relative z-0 aspect-video md:w-[300px]">
            <Image src={imageUrl} fill alt="" className="object-cover" />
          </div>
        )}
      </div>
    </div>
  )
})
