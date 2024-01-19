import Image from 'next/image'
interface IExploreCard {
  name: string
  icon: string
  text: string
  type: string
}
const ExploreCard = ({ name, icon, text, type }: IExploreCard) => {
  return (
    <div
      className={`relative col-span-2 flex h-full flex-col items-center gap-4 rounded-2xl bg-themeBgBlack py-5 hover:bg-themeBorderBlue`}
    >
     
      <div className="flex w-4/5 flex-col gap-4">
      <Image
        className="h-24 w-24"
        src={icon}
        alt=""
        width={800}
        height={800}
      />
        <p className="text-2xl font-semibold leading-[130%]">{name}</p>
        <div className="text-md absolute right-2 top-4 w-fit rounded-full border border-[#6754F8] bg-black px-4 py-2 font-light">
          {type}
        </div>
        <p className="text-xl font-normal leading-[140%] text-white/80">
          {text}
        </p>
      </div>
    </div>
  )
}

export default ExploreCard
