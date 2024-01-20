import Image from 'next/image'
interface TrendsCardInterface {
  name: string
  subDomain: string
  increement: string
  percent: string
}
const TrendsCard = ({
  name,
  subDomain,
  increement,
  percent,
}: TrendsCardInterface) => {
  const textColorClass = increement.includes('+')
    ? 'text-[#41CB69]'
    : 'text-[#CC2B2D]'
  return (
    <div className={`col-span-2 flex cursor-pointer flex-col justify-between gap-4 rounded-2xl bg-[#25252E] p-4`}>
      <div className="flex gap-4">
        <Image
          className="h-8 w-8 "
          src={'/CgAi/ChatAi/card-logo.png'}
          alt=""
          width={800}
          height={800}
        />
        <p className="text-xl font-bold leading-[140%] text-white/80 ">
          {name}
          <p className="text-[16px] font-medium leading-[140%] text-[#79869B]">
            {subDomain}
          </p>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p className={`text-xl font-medium ${textColorClass}`}>
            {increement} {percent}
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
            <Image
              className="h-8 w-16 "
              src={'/CgAi/ChatAi/chartInc.png'}
              alt=""
              width={800}
              height={800}
            />
          ) : (
            <Image
              className="h-8 w-16 "
              src={'/CgAi/ChatAi/chartDec.png'}
              alt=""
              width={800}
              height={800}
            />
          )}
      </div>
    </div>
  )
}

export default TrendsCard
