import LineChart from '@/components/charts/LineChart'
import Image from 'next/image'
import Link from 'next/link'
interface TrendsCardInterface {
  data: {
    pair: string
    coin: string
    symbol: string
    icon: string
  }
}
const TrendsCard = ({ data }: TrendsCardInterface) => {
  const increement = '+12'
  const textColorClass = increement.includes('+')
    ? 'text-[#41CB69]'
    : 'text-[#CC2B2D]'
  return (
    <Link
      href={`/CG-AI/markets/${data.pair}`}
      className={`flex min-w-[20rem] cursor-pointer flex-col justify-between gap-4 rounded-2xl bg-[#25252E] p-4`}
    >
      <div className="flex gap-4">
        <Image
          className="h-8 w-8"
          src={data.icon}
          alt=""
          width={2000}
          height={2000}
        />
        <p className="text-xl font-bold leading-[140%] text-white/80 ">
          {data.symbol}
          <p className="text-[16px] font-medium leading-[140%] text-[#79869B]">
            {data.coin}
          </p>
        </p>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <p className={`text-sm font-medium md:text-xl ${textColorClass}`}>
            {increement} {5}
          </p>
          {textColorClass === 'text-[#41CB69]' ? (
            <Image
              className="h-[10px] w-[20px] "
              src={'/CgAi/ChatAi/increase.png'}
              alt=""
              width={800}
              height={800}
            />
          ) : (
            <Image
              className="h-[10px] w-[20px] "
              src={'/CgAi/ChatAi/decrease.png'}
              alt=""
              width={800}
              height={800}
            />
          )}
        </div>
        {textColorClass === 'text-[#41CB69]' ? (
          <div className="h-8 w-16">
            <LineChart color="#41CB69" />
          </div>
        ) : (
          <div className="h-8 w-16">
            <LineChart color="rgba(255, 0, 0, 1)" />
          </div>
        )}
      </div>
    </Link>
  )
}

export default TrendsCard
