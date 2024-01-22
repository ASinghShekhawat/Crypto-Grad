'use client'

import { abbriviate } from '@/utils/numberFix'
import moment from 'moment'
import Image from 'next/image'
import { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Blog = () => {
  const [tab, setTab] = useState<'feed' | 'bookmark'>('feed')
  const [selected, setSelected] = useState('')
  const [feed, setFeed] = useState([
    {
      id: '23erfuahoehp983f7w483q9',
      date: new Date(),
      title: 'Spotting Scams in Crypto: How to Stay Safe?',
      tag: 'Crypto',
      likes: 23300,
      imageUrl:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '23erfuahoehp98sa3f7w483q9',
      date: new Date(),
      title: 'Spotting Scams in Crypto: How to Stay Safe?',
      tag: 'Crypto',
      likes: 23300,
      imageUrl:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ])
  const [selectedInfo, setSelectedInfo] = useState({
    tag: 'Crypto',
    title: 'Decoding Blockchain',
    date: new Date(),
    imageUrl:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    body: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente consequuntur possimus officiis libero numquam hic ipsam minus error, quas ullam obcaecati explicabo dignissimos soluta rem dicta? Inventore ipsum sed modi quia dolorum harum molestias eum illum non nam! Praesentium sequi consectetur hic officia quasi repudiandae eveniet exercitationem aperiam illo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente consequuntur possimus officiis libero numquam hic ipsam minus error, quas ullam obcaecati explicabo dignissimos soluta rem dicta? Inventore ipsum sed modi quia dolorum harum molestias eum illum non nam! Praesentium sequi consectetur hic officia quasi repudiandae eveniet exercitationem aperiam illo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente consequuntur possimus officiis libero numquam hic ipsam minus error, quas ullam obcaecati explicabo dignissimos soluta rem dicta? Inventore ipsum sed modi quia dolorum harum molestias eum illum non nam! Praesentium sequi consectetur hic officia quasi repudiandae eveniet exercitationem aperiam illo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente consequuntur possimus officiis libero numquam hic ipsam minus error, quas ullam obcaecati explicabo dignissimos soluta rem dicta? Inventore ipsum sed modi quia dolorum harum molestias eum illum non nam! Praesentium sequi consectetur hic officia quasi repudiandae eveniet exercitationem aperiam illo!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente consequuntur possimus officiis libero numquam hic ipsam minus error, quas ullam obcaecati explicabo dignissimos soluta rem dicta? Inventore ipsum sed modi quia dolorum harum molestias eum illum non nam! Praesentium sequi consectetur hic officia quasi repudiandae eveniet exercitationem aperiam illo!',
    ],
  })

  return (
    <div className="pageHeight flex w-full flex-col py-4 md:gap-8 md:px-8 md:py-8">
      <div className="flex">
        <button
          className={`w-full pb-2 ${
            tab === 'feed'
              ? 'border-b-2 border-themeBorderBlue font-semibold text-themeBorderBlue'
              : 'border-b border-white/20'
          }`}
          onClick={() => setTab('feed')}
        >
          Feed
        </button>
        <button
          className={`w-full pb-2 ${
            tab === 'bookmark'
              ? 'border-b-2 border-themeBorderBlue font-semibold text-themeBorderBlue'
              : 'border-b border-white/20'
          }`}
          onClick={() => setTab('bookmark')}
        >
          Bookmark
        </button>
      </div>
      {!selected && (
        <div className="flex flex-col p-4 md:p-0">
          {feed.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className="flex gap-4 p-4 text-left odd:bg-themeAiChatSidebarBgLight even:bg-themeAiChatSidebarBgDark"
            >
              <div className="flex flex-grow flex-col">
                <span className="mb-1 text-sm text-white/40">
                  {moment(item.date).format('DD MMM, YYYY')}
                </span>
                <div>{item.title}</div>
                <div className="mt-4 flex items-center gap-4">
                  <span className="rounded-full border border-themeBorderBlue bg-themeBlackBg px-4 py-1">
                    {item.tag}
                  </span>
                  <span className="h-6 border-r-2 border-white/20"></span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/CgAi/ChatAi/like.svg"
                      width={16}
                      height={16}
                      alt=""
                      className="opacity-40"
                    />
                    <span className="text-white/40">
                      {abbriviate(item.likes)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative flex h-full w-fit flex-col items-end justify-between">
                <Image
                  src={item.imageUrl}
                  width={1920}
                  height={1600}
                  alt=""
                  className="aspect-[16/10] h-16 w-fit object-cover shadow-xl"
                />
                <div className="flex gap-6">
                  <button>
                    <Image
                      src="/CgAi/ChatAi/bookmark.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </button>
                  <button>
                    <Image
                      src="/CgAi/ChatAi/share.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
      {selected && (
        <div className="flex flex-col p-4 md:p-0">
          <div className="flex justify-between">
            <span className="w-fit rounded-full border border-themeBorderBlue bg-themeBlackBg px-4 py-1">
              {selectedInfo.tag}
            </span>
            <button
              onClick={() => setSelected('')}
              className="text-3xl text-white/40 transition-all hover:text-white/80"
            >
              <IoIosCloseCircleOutline />
            </button>
          </div>
          <div className="mt-4 flex flex-col">
            <h1 className="text-2xl font-semibold">{selectedInfo.title}</h1>
            <span className="mb-1 text-sm text-white/40">
              {moment(selectedInfo.date).format('DD MMM, YYYY')}
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <div className="relative aspect-video w-full">
              <Image
                src={selectedInfo.imageUrl}
                fill
                alt=""
                className="object-cover"
              />
            </div>
            {selectedInfo.body.map((para) => (
              <p>{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog
