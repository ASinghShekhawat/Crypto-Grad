'use client'
import Image from 'next/image'
import TrendsCard from './TrendsCard'
import QuickActionCard from './QuickActionCard'
import ExploreCard from './ExploreCard'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'
import LineChart from '@/components/charts/LineChart'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@/components/shared/Button'
import MarketLowerPanel from './atoms/MarketsLowerPanel'
import MarketTrendingNews from './atoms/MarketsTrendingNews'
const Markets = () => {
  const [tab, setTab] = useState(0)
  const trends = [
    {
      name: 'Boe',
      subDomain: 'Boeing Co',
      increement: '+0.5',
      percent: '(+0.31%)',
    },
    {
      name: 'Boe',
      subDomain: 'Boeing Co',
      increement: '-0.8',
      percent: '(-0.37%)',
    },
    {
      name: 'Boe',
      subDomain: 'Boeing Co',
      increement: '-0.8',
      percent: '(-0.37%)',
    },
    {
      name: 'Boe',
      subDomain: 'Boeing Co',
      increement: '-0.8',
      percent: '(-0.37%)',
    },
  ]
  const quickActions = [
    {
      name: 'Analyze this trading view chart',
      action: 'Upload A Chart',
      icon: '/CgAi/ChatAi/chartUp.png',
      color: '#1C55D5',
    },
    {
      name: 'Audit this smart contract',
      action: 'Upload A CA',
      icon: '/CgAi/ChatAi/settings.png',
      color: '#5218FE',
    },
    {
      name: 'Recommend a trading strategy for the bull market ',
      action: '',
      icon: '',
      color: '#B418FE',
    },
  ]
  const exploreOptions = [
    {
      header: 'Chat Genius',
      name: `Your AI crypto chatbot for questions, market insights, and trading tips`,
      availability: 'Get Started',
    },
    {
      header: 'Trade Analyser',
      name: 'Your Trading assistant for market analysis and informed decisions.',
      availability: 'Get Started',
    },
    {
      header: 'Contract Insight',
      name: 'Smart contract analysis tool for transparency and security',
      availability: 'Coming Soon',
    },
    {
      header: 'Crypto Buzz',
      name: 'Stay updated with real-time crypto news and trendsy',
      availability: 'Coming Soon',
    },
  ]

  return (
    <div className="flex w-full flex-col gap-16 px-8 py-16">
      <p className="text-4xl font-semibold leading-[130%]">Bitcoin</p>
      <div className="flex flex-col gap-2">
        <div className="flex md:w-[40%] justify-between">
          <div className="flex gap-1">
            <Image
              src="/CgAi/ChatAi/bitcoin.png"
              className="h-16 w-16"
              height={800}
              width={800}
              alt=""
            />
            <div className="flex flex-col p-1">
              <p className="text-2xl font-bold leading-[140%] text-white/80 ">
                Bitcoin
              </p>
              <p className="text-[16px] font-medium leading-[140%] text-[#79869B]">
                Bitcoin Price
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Button className="h-6 w-fit text-sm font-normal">
              <Image
                src="/CgAi/ChatAi/white-up.png"
                className="h-4 w-4"
                height={800}
                width={800}
                alt=""
              />
              0.15%
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              <Image
                src="/CgAi/ChatAi/white-down.png"
                className="h-4 w-4"
                height={800}
                width={800}
                alt=""
              />
              0.15%
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-white/80">Low: $40,636.63</p>
          <Box sx={{ width: 100 }} className="mt-1">
            <Slider
              size="small"
              defaultValue={41102}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={40636.63}
              max={41627.96}
            />
          </Box>
          <p className="text-xs text-white/80">High: $41,627.96</p>
          <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          defaultValue={10}
          className='w-20 h-5'
        >
          <MenuItem value={10} className='text-normal text-base'>24h</MenuItem>
          <MenuItem value={20}>12h</MenuItem>
          <MenuItem value={30}>6h</MenuItem>
        </Select>
        </div>
      </div>
      <div className="h-12 w-full gap-2 border-b border-b-[#969696] overflow-x-auto">
        <div className="flex w-3/5 gap-4 md:justify-between">
          <div
            className={`cursor-pointer text-base opacity-[0.8] ${
              tab === 0 ? 'text-[#FFF]' : 'text-gray-400'
            }`}
            onClick={() => setTab(0)}
          >
            Overview
          </div>
          <div
            className={`cursor-pointer text-base opacity-[0.8] ${
              tab === 1 ? 'text-[#FFF]' : 'text-gray-400'
            }`}
            onClick={() => setTab(1)}
          >
            Timeline
          </div>
          <div
            className={`cursor-pointer text-base opacity-[0.8] ${
              tab === 2 ? 'text-[#FFF]' : 'text-gray-400'
            }`}
            onClick={() => setTab(2)}
          >
            News
          </div>
          <div
            className={`cursor-pointer text-base opacity-[0.8] ${
              tab === 3 ? 'text-[#FFF]' : 'text-gray-400'
            }`}
            onClick={() => setTab(3)}
          >
            Ideas
          </div>
          <div
            className={`cursor-pointer text-base opacity-[0.8] ${
              tab === 4 ? 'text-[#FFF]' : 'text-gray-400'
            }`}
            onClick={() => setTab(4)}
          >
            Technicals
          </div>
          <div
            className={`cursor-pointer text-base opacity-[0.8] ${
              tab === 5 ? 'text-[#FFF]' : 'text-gray-400'
            }`}
            onClick={() => setTab(5)}
          >
            Markets
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
      <MarketLowerPanel />
      <MarketTrendingNews />
      </div>
    </div>
  )
}

export default Markets
