import Image from "next/image";
import NftDroppingTimer from "./NftDroppingTimer";

const NftDroppingNav = () => {
  return (
    <div className="hidden bg-gradient-to-r from-themeViolet to-themeBlue px-8 h-16 md:flex justify-between items-center">
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
  );
};

export default NftDroppingNav;
