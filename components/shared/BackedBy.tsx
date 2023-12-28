'use client'

import Image from 'next/image'
import Animated from './Animated'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/autoplay'

export default function BackedBy() {
  return (
    <Animated className="relative z-5 flex flex-col items-center justify-between px-8 py-16 mmd:flex-row mmd:px-16">
      <div className="text-lg font-medium text-themeLightGrey">
        We are <br className="hidden mmd:block" />
        Backed by
      </div>
      <div className="hidden items-center justify-center gap-6 mmd:flex">
        <Image
          src="/Homepage/Hero/webflow.svg"
          width={140}
          height={56}
          alt=""
        />
        <Image src="/Homepage/Hero/relume.svg" width={140} height={56} alt="" />
        <Image
          src="/Homepage/Hero/webflow.svg"
          width={140}
          height={56}
          alt=""
        />
        <Image src="/Homepage/Hero/relume.svg" width={140} height={56} alt="" />
        <Image
          src="/Homepage/Hero/webflow.svg"
          width={140}
          height={56}
          alt=""
        />
      </div>
      <div className="block w-full mmd:hidden">
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
            <Image
              src="/Homepage/Hero/webflow.svg"
              width={140}
              height={56}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Homepage/Hero/relume.svg"
              width={140}
              height={56}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Homepage/Hero/webflow.svg"
              width={140}
              height={56}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Homepage/Hero/relume.svg"
              width={140}
              height={56}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Homepage/Hero/webflow.svg"
              width={140}
              height={56}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Animated>
  )
}
