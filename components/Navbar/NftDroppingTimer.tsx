"use client";
import Countdown, { CountdownRenderProps } from "react-countdown";
import Button from "../shared/Button";
import { ButtonType } from "@/types/buttton";
import { useEffect, useState } from "react";
import NftDroppedDialog from "./NftDroppedDialog";

const NftDroppingTimer = () => {
  const [timer, setTimer] = useState(Date.now() + 500000000);

  const makeMeTwoDigits = (n: number) => {
    return n < 10 ? `0${n}` : n;
  };

  useEffect(() => {}, []);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <>
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="font-semibold">NFTs Dropped!</div>
            <Button type={ButtonType.SECONDARY}>Claim Now</Button>
          </div>
          <NftDroppedDialog />
        </>
      );
    } else {
      return (
        <div className="flex items-center gap-4 w-full justify-center">
          <div className="font-semibold">NFTs Dropping In</div>
          <div className="flex items-start gap-1">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl leading-7 font-bold">
                {makeMeTwoDigits(days)}
              </span>
              <span className="text-2xs font-light">Days</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl leading-7 font-bold">
                {makeMeTwoDigits(hours)}
              </span>
              <span className="text-2xs font-light">Hours</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl leading-7 font-bold">
                {makeMeTwoDigits(minutes)}
              </span>
              <span className="text-2xs font-light">Minutes</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xl leading-7 font-bold">
                {makeMeTwoDigits(seconds)}
              </span>
              <span className="text-2xs font-light">Seconds</span>
            </div>
          </div>
        </div>
      );
    }
  };
  return <Countdown date={timer} renderer={renderer} />;
};

export default NftDroppingTimer;
