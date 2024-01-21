'use client'
import Image from 'next/image'
import TrendsCard from './TrendsCard'
import QuickActionCard from './QuickActionCard'
import ExploreCard from './ExploreCard'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'
import LineChart from '@/components/charts/LineChart'
const Dashboard = () => {
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
      <div className="flex gap-4 overflow-x-scroll mmd:justify-center mmd:overflow-auto ">
        <div className="grid w-full min-w-[59rem] grid-cols-8 gap-4 mmd:min-w-0 ">
          {trends.map((item, index) => (
            <TrendsCard
              key={index}
              name={item.name}
              subDomain={item.subDomain}
              increement={item.increement}
              percent={item.percent}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-3xl font-semibold leading-[130%]">Getting Started</p>
        <Image
          src="/CgAi/ChatAi/gettingStarted.png"
          width={800}
          height={800}
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-semibold leading-[130%]">Quick Actions</p>
        <div className="flex gap-4 overflow-x-scroll mmd:justify-center mmd:overflow-auto">
          <div className="grid w-full min-w-[59rem] grid-cols-6 gap-4 md:w-fit mmd:min-w-0">
            {quickActions.map((item, index) => (
              <QuickActionCard
                name={item.name}
                action={item.action}
                icon={item.icon}
                color={item.color}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-semibold leading-[130%]">Explore CG AI</p>
        <div className="flex gap-4 overflow-x-scroll mmd:justify-center mmd:overflow-auto">
          <div className="grid w-full grid-cols-6 gap-4 md:w-fit mmd:min-w-0">
            {exploreOptions.map((item, index) => (
              <ExploreCard
                name={item.name}
                header={item.header}
                key={index}
                availability={item.availability}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 rounded-xl bg-[#5E5AFF] px-4 py-8 md:px-8 md:py-12">
        <p className="text-base font-semibold leading-[130%] md:text-3xl">
          Suggest a new feature or Provide feedback to us
        </p>

        <div className="flex h-full w-full gap-2">
          <div className="flex h-14 w-1/2 items-center justify-center rounded-lg bg-[#FDFDFD] px-2 py-8 text-sm font-bold text-[#0D0D17] md:text-2xl">
            Share A Review
          </div>
          <div className="flex h-14 w-1/2 items-center justify-center rounded-lg border px-2 py-8 text-sm font-bold text-[#FDFDFD] md:text-2xl">
            Suggest Feature
          </div>
        </div>
      </div>
      <div className="row-start-7 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:col-span-3 md:row-start-4">
        <div className="flex text-xl font-semibold capitalize">
          Join the Community
        </div>
        <div className="overflow-x-scroll md:overflow-auto">
          <div className="relative z-1 grid w-full grid-cols-3 gap-4 md:min-w-0">
            <a
              href="https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw"
              target="_blank"
              rel="noreferrer noopener"
              className="col-span-3 flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:col-span-1 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">Twitter</div>
                <div className="text-sm font-light">General Announcements</div>
              </div>
              <RxTwitterLogo className="!text-4xl !text-[#229ED9] md:!text-7xl" />
            </a>
            <a
              href="https://t.me/cryptogradportal"
              target="_blank"
              rel="noreferrer noopener"
              className="col-span-3 flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:col-span-1 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">
                  Telegram
                </div>
                <div className="text-sm font-light">Live Chat</div>
              </div>
              <FaTelegramPlane className="!text-4xl !text-[#229ED9] md:!text-7xl" />
            </a>
            <a
              href="https://discord.gg/GQJTSFdTwh"
              target="_blank"
              rel="noreferrer noopener"
              className="col-span-3 flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:col-span-1 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">Discord</div>
                <div className="text-sm font-light">
                  Access AI bots, Trading Signals, Whale <br /> Rooms,
                  Community, and much more...
                </div>
              </div>
              <FaDiscord className="!text-4xl !text-[#5865F2] md:!text-7xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
