import Image from "next/image";
import React, { useState } from "react";
import InviteFriendDialog from "./Invite";

const VerifiedPage = () => {
  const [showInviteDialog, setShowInviteDialog] = useState(false);

  const handleInviteButtonClick = () => {
    setShowInviteDialog(!showInviteDialog);
  };

  return (
    <>
      {showInviteDialog ? (
        <InviteFriendDialog onClose={handleInviteButtonClick} />
      ) : (
        <div className="flex justify-center mmd:items-center items-start h-screen">
          <div className="mmd:bg-themeBlack mmd:p-8 p-4 rounded-3xl mmd:w-1/3">
            <h1 className="text-lg md:text-2xl text-center text-white font-semibold mb-2 mmd:mt-8 mt-2">
              Hi John, Congrats! Your Position Is
            </h1>
            <div className="flex justify-center items-center">
              <Image
                src={"WLpictures/people.svg"}
                height={60}
                width={60}
                alt="brand-logo"
              />
              <p className="text-2xl md:text-4xl font-bold text-white opacity-90">243</p>
            </div>

            <h1 className="text-lg md:text-lg text-center text-white font-semibold mb-0 mt-8">
              You Earned
            </h1>

            <div className="flex justify-center items-center">
              <Image
                src={"WLpictures/coin.svg"}
                height={60}
                width={60}
                alt="brand-logo"
                className="md:mb-4 md:w-28 w-20 mb-5"
              />
              <h1 className="text-2xl md:text-4xl text-center text-white font-bold mb-6 mr-3">
                100 CG Tokens
              </h1>
            </div>
            <div className=" mmd:flex justify-center mb-8">
              <div className="flex justify-center items-center">
                <div className="mmd:bg-themeGrey justify-center items-center text-center p-2 mmmd:w-52 md:mb-4 m-1.5 rounded-md">
                  <p className="text-base mmd:text-sm font-light">Total in waitlist</p>
                  <p className="text-lg md:text-2xl font-semibold">9,828</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="mmd:bg-themeGrey justify-center items-center text-center p-2 mmmd:w-52 md:mb-4 m-1.5 rounded-md">
                  <p className="text-base md:text-sm font-light">Your Successful Referrals</p>
                  <p className="text-lg md:text-2xl font-semibold">11</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center relative">
              <div className="flex bg-themeGrey justify-center items-center text-center p-1 md:mb-4 m-1 rounded-md w-full">

                <div className="mmd:relative w-4/5 mmd:w-full">
                  <Image
                    src={"WLpictures/cards.svg"}
                    height={85}
                    width={85}
                    alt="brand-logo"
                    className="a mb-0 md:mb-[40px] absolute left-7 transform -translate-x-1/2"
                  />
                  <p className="w-5/6 mmd:text-base text-sm  text-left font-light ml-auto">
                    Invite more friends to join the waitlist and get on the top 3 rank
                  </p>

                </div>

              </div>

            </div>

            <button onClick={handleInviteButtonClick} className="bg-gradient-to-r from-themeViolet to-themeBlue flex justify-center items-center gap-2 text-white mt-14 transition-all rounded-lg px-8 min-h-[2.5rem] font-medium text-lg w-full">Invite Friends</button>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifiedPage;
