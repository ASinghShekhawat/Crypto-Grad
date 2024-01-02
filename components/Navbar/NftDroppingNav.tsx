'use client'

import NftDroppingTimer from './NftDroppingTimer'
import Link from 'next/link'

const NftDroppingNav = () => {
  return (
    <div className="flex h-fit items-center justify-center gap-2 bg-gradient-to-r from-themeViolet to-themeBlue px-4 py-1 md:gap-4 mmd:px-16">
      {/* <Image
        src="/Navbar/nft-wait-head.png"
        className="h-full object-contain object-left"
        width={336}
        height={119}
        alt=""
      /> */}
      <NftDroppingTimer />
      <Link
        href="/presale"
        className="text-xs font-bold underline md:text-base"
      >
        Know More
      </Link>
      {/* <Image
        src="/Navbar/nft-wait-head-1.png"
        className="h-full object-contain object-right"
        width={333}
        height={119}
        alt=""
      /> */}
    </div>
  )
}

export default NftDroppingNav
