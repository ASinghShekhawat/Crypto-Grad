'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'
import useChat from '@/hooks/useChat'

export default function History({ params }: { params: { timeline: string } }) {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const { allChat } = useChat()

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSelect = (id: string) => {
    const idx = selected.findIndex((sel) => sel === id)
    if (idx < 0) return setSelected([...selected, id])
    const tempArr = selected.filter((item) => item !== id)
    setSelected([...tempArr])
  }

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <div className="flex w-full items-center rounded-lg bg-themeNavBlack p-4">
        <input
          type="text"
          value={search}
          className="w-full border-none bg-inherit outline-none"
          onChange={handleSearch}
          placeholder="Search"
        />
        <IoSearch className="text-white/40" />
      </div>
      <div className="flex flex-col">
        {allChat.map((item) => (
          <button
            key={item.threadId}
            onClick={() => handleSelect(item.threadId)}
            className="relative p-4 pr-6 text-left odd:bg-themeAiChatSidebarBgLight even:bg-themeAiChatSidebarBgDark"
          >
            <div>{item.title}</div>
            <div className="mt-2 truncate text-white/40">{item.title}</div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-themeBorderBlue md:bottom-auto md:top-2 md:translate-y-0">
              {selected.find((elem) => elem === item.threadId) ? (
                <FaRegCheckCircle />
              ) : (
                <FaRegCircle />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
