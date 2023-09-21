"use client";

import { ButtonType } from "@/types/buttton";
import Button from "../shared/Button";
import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";

const HeroSectionActions = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
      // onClick={() => {}}
      >
        Join The Waitlist
      </Button>
      <Button className="!px-0 aspect-square" type={ButtonType.SECONDARY}>
        <BsDiscord />
      </Button>
      <Button className="!px-0 aspect-square" type={ButtonType.SECONDARY}>
        <BsTwitter />
      </Button>
      <Button className="!px-0 aspect-square" type={ButtonType.SECONDARY}>
        <BsInstagram />
      </Button>
    </div>
  );
};

export default HeroSectionActions;
