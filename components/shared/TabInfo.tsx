import Image from "next/image";
import Animated from "./Animated";

export default function TabInfo() {
  return (
    <Animated className="relative z-5 flex flex-col items-center justify-center gap-16 px-8 mmd:px-16">
      <div className="flex items-center justify-center rounded-full bg-themeBlackBg p-2 font-light">
        <button
          className={`rounded-full bg-themeBlackDeep px-4 py-2 text-xs md:text-base`}
        >
          CG AI
        </button>
        <button className={`rounded-full px-4 py-2 text-xs md:text-base`}>
          NFT&apos;s
        </button>
        <button className={`rounded-full px-4 py-2 text-xs md:text-base`}>
          Discord Community
        </button>
        <button className={`rounded-full px-4 py-2 text-xs md:text-base`}>
          CoursesI
        </button>
      </div>
      <Image
        src="/Homepage/Hero/HeroMain.svg"
        className="w-full"
        width={1312}
        height={743}
        alt=""
      />
    </Animated>
  )
}
