import Image from "next/image";
import Animated from "../shared/Animated";
import HeroSectionActions from "./HeroSectionActions";

const HeroSection = () => {
  return (
    <Animated className="flex flex-col">
      {/* <Image  /> */}
      <div>Your Solution To Everything Crypto</div>
      <div>
        All facilitated by a single game-changing platform. Experience the
        revolution of blockchain in an unparalleled way.
      </div>
      <HeroSectionActions />
    </Animated>
  );
};

export default HeroSection;
