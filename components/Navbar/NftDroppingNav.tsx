'use client'

import Image from 'next/image'
import NftDroppingTimer from './NftDroppingTimer'
import { usePathname } from 'next/navigation'

const NftDroppingNav = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    pathname === '/' && (
      <div className="hidden h-16 items-center justify-between bg-gradient-to-r from-themeViolet to-themeBlue px-8 mmd:px-16 md:flex">
        <Image
          src="/Navbar/nft-wait-head.png"
          className="h-full object-contain object-left"
          width={336}
          height={119}
          alt=""
        />
        <NftDroppingTimer />
        <Image
          src="/Navbar/nft-wait-head-1.png"
          className="h-full object-contain object-right"
          width={333}
          height={119}
          alt=""
        />
      </div>
    )
  )
}

export default NftDroppingNav
