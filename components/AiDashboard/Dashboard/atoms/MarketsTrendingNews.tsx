import Button from '@/components/shared/Button'
import Image from 'next/image'

const MarketTrendingNews = () => {
  return (
    <div className="col-span-6 md:col-span-2 flex h-fit md:h-[700px] flex-col gap-8 rounded-lg bg-[#20222B] pl-8 pr-16 py-4">
      <p className="text-xl font-medium leading-[140%] text-white/80 ">
        Trending News
      </p>
      <div className="flex flex-col gap-2 py-2 border-b border-b-[#FFFFFF0D]">
        <p className="text-base font-medium leading-[140%] text-white/80 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm font-medium leading-[140%] text-gray-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between gap-1">
            <Image
              src={'/CgAi/ChatAi/self.png'}
              className="h-4 w-4"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              Author's name
            </p>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <Image
              src={'/CgAi/ChatAi/dot.png'}
              className="h-1 w-1"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              March 15, 2022
            </p>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <Image
              src={'/CgAi/ChatAi/dot.png'}
              className="h-1 w-1"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              5 Min Read
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-2 border-b border-b-[#FFFFFF0D]">
        <p className="text-base font-medium leading-[140%] text-white/80 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm font-medium leading-[140%] text-gray-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio
        </p>
        <div className="flex justify-between ">
          <div className="flex justify-between gap-1">
            <Image
              src={'/CgAi/ChatAi/self.png'}
              className="h-4 w-4"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              Author's name
            </p>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <Image
              src={'/CgAi/ChatAi/dot.png'}
              className="h-1 w-1"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              March 15, 2022
            </p>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <Image
              src={'/CgAi/ChatAi/dot.png'}
              className="h-1 w-1"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              5 Min Read
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-2 border-b border-b-[#FFFFFF0D]">
        <p className="text-base font-medium leading-[140%] text-white/80 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm font-medium leading-[140%] text-gray-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between gap-1">
            <Image
              src={'/CgAi/ChatAi/self.png'}
              className="h-4 w-4"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              Author's name
            </p>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <Image
              src={'/CgAi/ChatAi/dot.png'}
              className="h-1 w-1"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              March 15, 2022
            </p>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <Image
              src={'/CgAi/ChatAi/dot.png'}
              className="h-1 w-1"
              alt=""
              height={800}
              width={800}
            />
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              5 Min Read
            </p>
          </div>
        </div>
      </div>
      <Button className='my-auto'>Read More News</Button>
    </div>
  )
}

export default MarketTrendingNews
