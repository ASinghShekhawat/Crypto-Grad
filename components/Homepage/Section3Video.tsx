'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { FaCirclePlay } from 'react-icons/fa6'

const Section3Video = () => {
  const videoRef = useRef<any>(null)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-themeVideoBgGrey">
      <div className="absolute left-1/2 top-1/2 z-1 flex h-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <Image
          src="/cryptogradSmall.svg"
          width={30}
          height={23}
          className="w-20"
          alt=""
        />
        <div className="text-sm font-medium">CRYPTOGRD</div>
      </div>
      <video ref={videoRef} className="relative z-2 h-full w-full">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <button
        onClick={() => videoRef.current.play()}
        className="absolute bottom-4 right-4 z-5 text-themeBorderBlue md:bottom-8 md:right-8"
      >
        <FaCirclePlay className="text-4xl mmd:text-7xl" />
      </button>
    </div>
  )
}

export default Section3Video
