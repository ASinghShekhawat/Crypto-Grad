import Brand from './Brand'
import ConnectWallet from './ConnectWallet'
import Drawer from './Drawer'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 mx-auto flex h-16 w-full items-center justify-between border-themeBorder/30 bg-themeNavBlack/80 bg-opacity-80 px-8 backdrop-blur-lg mmd:h-20 mmd:px-16">
      <Brand />
      {/* <div className="hidden items-center gap-4 mmd:flex"> */}
      <div className="hidden mmd:flex">
        <NavMenu />
      </div>
      <div className="hidden mmd:flex">
        <ConnectWallet />
      </div>
      {/* </div> */}
      <Drawer />
    </nav>
  )
}

export default Navbar
