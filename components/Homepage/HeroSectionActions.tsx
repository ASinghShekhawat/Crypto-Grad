"use client";

import { ButtonType } from "@/types/buttton";
import Button from "../shared/Button";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from 'react-icons/bi'

const HeroSectionActions = () => {
  return (
    <div className="flex items-center justify-center md:gap-4 gap-2 mt-8 relative z-5">
      <Button
      // onClick={() => {}}
      className="!h-12"
      >
        Join The Beta
      </Button>
      <Button className="!px-0 aspect-square !h-12" type={ButtonType.SECONDARY}>
        <BsDiscord className="!text-2xl" />
      </Button>
      <Button className="!px-0 aspect-square !h-12" type={ButtonType.SECONDARY}>
        <BsTwitter className="!text-2xl" />
      </Button>
      <Button className="!px-0 aspect-square !h-12" type={ButtonType.SECONDARY}>
        <BiLogoInstagramAlt className="!text-3xl" />
      </Button>
    </div>
  );
};

export default HeroSectionActions;
