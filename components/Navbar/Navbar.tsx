'use client'

import { usePathname } from 'next/navigation'
import Brand from './Brand'
import ConnectWallet from './ConnectWallet'
import Drawer from './Drawer'
import NavMenu from './NavMenu'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="sticky top-0 z-10 mx-auto flex h-16 w-full items-center justify-between border-themeBorder/30 bg-themeNavBlack/80 bg-opacity-80 px-8 backdrop-blur-lg mmd:h-20 mmd:px-16">
      <Brand />
      {pathname.includes('/presale') && (
        <>
          <div className="hidden mmd:flex">
            <NavMenu pathname={pathname} />
          </div>
          <div className="hidden mmd:flex">
            <ConnectWallet pathname={pathname} />
          </div>
        </>
      )}
      {pathname === '/' && (
        <div className="hidden items-center gap-4 mmd:flex">
          <NavMenu pathname={pathname} />
          <ConnectWallet pathname={pathname} />
        </div>
      )}
      <Drawer />
    </nav>
  )
}

export default Navbar
