import Image from 'next/image'
import { FaCirclePlay } from 'react-icons/fa6'

const Section3Video = () => {
  return (
    <div className="bg-themeVideoBgGrey relative aspect-video w-full rounded-3xl">
      <div className="absolute left-1/2 top-1/2 flex h-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <Image
          src="/cryptogradSmall.svg"
          width={30}
          height={23}
          className="w-20"
          alt=""
        />
        <div className="text-sm font-medium">CRYPTOGRD</div>
      </div>
      <button className="absolute md:bottom-8 md:right-8 bottom-4 right-4 text-themeBorderBlue">
        <FaCirclePlay className="mmd:text-7xl text-4xl" />
      </button>
    </div>
  )
}

export default Section3Video
