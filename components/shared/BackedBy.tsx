'use client'

import Image from 'next/image'
import Animated from './Animated'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/autoplay'

export default function BackedBy() {
  return (
    <Animated className="relative z-5 flex flex-col items-center justify-between px-4 py-16 mmd:flex-row mmd:px-16">
      <div className="text-lg font-medium text-themeLightGrey">
        We are <br className="hidden mmd:block" />
        Backed by
      </div>
      <div className="hidden items-center justify-center gap-6 mmd:flex">
        <Image
          src="/Homepage/Hero/backers (1).png"
          width={443}
          height={185}
          alt=""
          className="w-28"
        />
        <Image
          src="/Homepage/Hero/backers (2).png"
          width={410}
          height={90}
          alt=""
          className="w-28"
        />
        <Image
          src="/Homepage/Hero/backers (3).png"
          width={298}
          height={58}
          alt=""
          className="w-28"
        />
        <Image
          src="/Homepage/Hero/backers (4).png"
          width={229}
          height={61}
          alt=""
          className="w-28"
        />
        <Image
          src="/Homepage/Hero/backers (5).png"
          width={305}
          height={241}
          alt=""
          className="w-28"
        />
      </div>
      <div className="mt-8 block w-full mmd:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          modules={[Autoplay]}
          allowTouchMove={false}
          className="marqueeSwiperBackers"
        >
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                src="/Homepage/Hero/backers (1).png"
                width={443}
                height={185}
                alt=""
                className="w-28"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                src="/Homepage/Hero/backers (2).png"
                width={410}
                height={90}
                alt=""
                className="w-28"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                src="/Homepage/Hero/backers (3).png"
                width={298}
                height={58}
                alt=""
                className="w-28"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                src="/Homepage/Hero/backers (4).png"
                width={229}
                height={61}
                alt=""
                className="w-28"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full items-center justify-center">
              <Image
                src="/Homepage/Hero/backers (5).png"
                width={305}
                height={241}
                alt=""
                className="w-28"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Animated>
  )
}
