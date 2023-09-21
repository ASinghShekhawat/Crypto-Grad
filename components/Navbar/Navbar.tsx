import Brand from "./Brand";
import ConnectWallet from "./ConnectWallet";
import Drawer from "./Drawer";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav className="sticky mmd:border-b-[0.4px] border-themeBorder/30 top-0 mx-auto w-full z-10 h-16 flex items-center justify-between px-8 backdrop-blur-lg bg-themeNavBlack/80">
      <Brand />
      <div className="items-center gap-4 hidden mmd:flex">
        <NavMenu />
        <ConnectWallet />
      </div>
      <Drawer />
    </nav>
  );
};

export default Navbar;
