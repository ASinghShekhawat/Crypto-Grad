import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import { X } from "react-feather";
import 'react-social-icons/whatsapp'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'



const InviteFriendDialog = ({ onClose }) => {
  return (
    <div className="flex justify-center mmd:items-center items-end h-screen ">
      <div className="relative mmd:w-1/3 ">
     <button className="bg-themeBgBlack text-white py-2 px-2 rounded-full absolute top-0 right-0 -mt-12 -mr-0 hidden mmd:block">
            <X size={20} />
          </button>
      <div className="bg-themeBlack p-9 rounded-3xl ">
      
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4 mmd:text-left text-center">Invite your friends</h2>
        <p className="text-lg font-light text-white opacity-80 mmd:text-left text-center my-5">
          Win More CG tokens and climb up the Leaderboard
        </p>
        <input
          type="text"
          placeholder="ww.cryptograd/refer/john13"
          className="bg-transparent border border-themeTextGrey placeholder-themeTextGrey text-themeTextGrey rounded-lg px-4 py-2 mt-4 w-full"
        />

        <button className="bg-gradient-to-r from-themeViolet to-themeBlue flex justify-center items-center gap-2 text-white mt-14 mb-12 transition-all rounded-lg px-8 py-3 min-h-[2.5rem] font-semibold text-xl mmd:w-auto w-full">Copy Invite Code</button>
        <div className='grid grid-cols-5 my-6 mmd:w-4/5'>
          <SocialIcon url="www.whatsapp.com" />
          <SocialIcon url="www.facebook.com" />
          <SocialIcon url="www.twitter.com" />
          <SocialIcon url="www.linkedin.com" />
          <SocialIcon url="www.instagram.com" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default InviteFriendDialog;
