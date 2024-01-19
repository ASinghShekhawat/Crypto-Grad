import Image from 'next/image'
import TrendsCard from './TrendsCard'
import QuickActionCard from './QuickActionCard'

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
      increement: '-0.80',
      percent: '(-0.37%)',
    },
    {
      name: 'Boe',
      subDomain: 'Boeing Co',
      increement: '-0.80',
      percent: '(-0.37%)',
    },
    {
      name: 'Boe',
      subDomain: 'Boeing Co',
      increement: '-0.80',
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

  return (
    <div className="flex w-full flex-col gap-16 p-8">
      <div className="flex gap-4 overflow-x-scroll mmd:justify-center mmd:overflow-auto">
        <div className="grid grid-cols-8 w-full min-w-[59rem] gap-4 md:w-fit mmd:min-w-0">
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
            {quickActions.map((item,index) => (
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
          <div className="grid w-full min-w-[59rem] grid-cols-6 gap-4 md:w-fit mmd:min-w-0">
            {quickActions.map((item,index) => (
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
    </div>
  )
}

export default Dashboard
