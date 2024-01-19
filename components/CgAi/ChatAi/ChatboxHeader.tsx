'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { BsThreeDots } from 'react-icons/bs'

export default function ChatboxHeader({
  chatType,
  chatId,
  searchtab,
  started,
}: {
  chatType:
    | 'chat-genius'
    | 'trade-analyser'
    | 'contract-insight'
    | 'crypto-buzz'
  chatId: string
  searchtab?: string
  started: boolean
}) {
  return !started ? (
    <div className="flex items-center justify-between px-4 py-4 md:py-8">
      <div className="text-3xl font-semibold capitalize md:text-5xl">
        {chatType.split('-').join(' ')}
      </div>
      {(chatType === 'chat-genius' || chatType === 'trade-analyser') && (
        <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
          <Link
            href={`/CG-AI/chat/${chatType}/${chatId}?tab=beginner`}
            className={`rounded-full ${
              searchtab === 'beginner' && 'bg-themeBlackDeep'
            } px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base`}
          >
            Beginner
          </Link>
          <Link
            href={`/CG-AI/chat/${chatType}/${chatId}?tab=intermediate`}
            className={`rounded-full px-2.5 py-2 text-xs transition-all ${
              searchtab === 'intermediate' && 'bg-themeBlackDeep'
            } hover:bg-themeBlackDeep md:text-base`}
          >
            Intermediate
          </Link>
          <Link
            href={`/CG-AI/chat/${chatType}/${chatId}?tab=advanced`}
            className={`rounded-full px-2.5 py-2 text-xs transition-all ${
              searchtab === 'advanced' && 'bg-themeBlackDeep'
            } hover:bg-themeBlackDeep md:text-base`}
          >
            Aadvanced
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-between bg-[#181920] p-4">
      <span className="text-2xl font-medium capitalize">
        {chatType.split('-').join(' ')}
      </span>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <BsThreeDots className="text-2xl" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 flex w-56 origin-top-right flex-col divide-y divide-themeGrey rounded-lg bg-[#22222C] shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                New Chat
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Chat history
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Show trading style
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Settings
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Rename
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                New Chat
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
