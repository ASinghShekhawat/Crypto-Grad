import Image from 'next/image'
interface IExploreCard {
  name: string
  header: string
  availability: string
}
const ExploreCard = ({ name, header, availability }: IExploreCard) => {
  return (
    <div
      className={`col-span-6 md:col-span-3 flex cursor-pointer flex-col justify-between gap-4 rounded-2xl bg-[#25252E] p-8`}
    >
      <div className="text-md w-fit rounded-full border border-[#6754F8] bg-black px-4 py-2 font-light">
        {header}
      </div>
      <p className="text-2xl font-bold leading-[140%] text-white/80 ">{name}</p>
      <div className="flex gap-2">
        <p className="text-2xl font-bold text-[#A5A3FF]">{availability}</p>
        <Image
          className="h-8 w-8"
          src={'/CgAi/ChatAi/arrow-right.png'}
          alt=""
          width={800}
          height={800}
        />
      </div>
    </div>
  )
}

export default ExploreCard
