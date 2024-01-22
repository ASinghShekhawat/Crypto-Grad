'use client'

import { ChangeEvent, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'

export default function History({ params }: { params: { timeline: string } }) {
  const [search, setSearch] = useState('')
  const [data, setData] = useState<any[]>([
    {
      id: '984fj',
      title: 'Lorem ipsum dolor',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum.',
    },
    {
      id: '98d4fj',
      title: 'Lorem ipsum dolor',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum.',
    },
    {
      id: '9384fj',
      title: 'Lorem ipsum dolor',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum.',
    },
    {
      id: '984fwj',
      title: 'Lorem ipsum dolor',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum.',
    },
  ])
  const [selected, setSelected] = useState<string[]>([])

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
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="relative p-4 pr-6 text-left odd:bg-themeAiChatSidebarBgLight even:bg-themeAiChatSidebarBgDark"
          >
            <div>{item.title}</div>
            <div className="mt-2 truncate text-white/40">{item.message}</div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-themeBorderBlue md:bottom-auto md:top-2 md:translate-y-0">
              {selected.find((elem) => elem === item.id) ? (
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
