import Image from 'next/image'
import Link from 'next/link'

export interface IExploreData {
  name: string
  icon: string
  text: string
  type: string
  path: string
  target?: boolean
}
interface IExploreCard {
  data: IExploreData
}
const ExploreCard = ({ data }: IExploreCard) => {
  const { name, icon, text, type, path, target } = data
  return (
    <Link
      href={path}
      target={target ? '_blank' : '_self'}
      rel={target ? 'noreferrer noopener' : undefined}
      className={`relative flex h-full flex-col items-center gap-4 rounded-2xl bg-themeBgBlack py-5 hover:bg-themeBorderBlue`}
    >
      <div className="flex w-full flex-col gap-4 p-4 md:p-8">
        <div className="relative h-24 w-24">
          <Image
            className="h-fit w-24 object-contain object-left"
            src={icon}
            alt=""
            fill
          />
        </div>
        <p className="text-xl font-semibold leading-[130%] md:text-2xl">
          {name}
        </p>
        <div className="absolute right-2 top-4 w-fit rounded-full border border-[#6754F8] bg-black px-4 py-2 font-light">
          {type}
        </div>
        <p className="font-normal leading-[140%] text-white/80 md:text-xl">
          {text}
        </p>
      </div>
    </Link>
  )
}

export default ExploreCard
