import { SocialIcon } from 'react-social-icons'
import { X } from 'react-feather'
import 'react-social-icons/whatsapp'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import Button from '../shared/Button'
import Page from '../shared/Page'

const InviteFriendDialog = ({ onClose }: { onClose: () => void }) => {
  return (
    <Page className="flex items-end justify-center md:items-center !p-0 md:!p-8">
      <div className="relative md:w-[500px] ">
        <button className="absolute right-0 top-0 -mr-0 -mt-12 hidden rounded-full bg-themeBgBlack px-2 py-2 text-white md:block">
          <X size={20} />
        </button>
        <div className="rounded-3xl bg-themeBlack md:border-none border border-themeBorder/40 p-9 w-full">
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-left md:text-3xl">
            Invite your friends
          </h2>
          <p className="my-5 text-lg font-light text-white opacity-80 md:text-left">
            Win More CG tokens and climb up the Leaderboard
          </p>
          <input
            type="text"
            placeholder="ww.cryptograd/refer/john13"
            className="mt-4 w-full rounded-lg border border-themeTextGrey bg-transparent px-4 py-2 text-themeTextGrey placeholder-themeTextGrey"
          />

          <Button className="mt-6 md:w-fit w-full">Copy Invite Code</Button>
          <div className="my-6 grid grid-cols-5 md:w-4/5">
            <SocialIcon url="www.whatsapp.com" />
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="www.twitter.com" />
            <SocialIcon url="www.linkedin.com" />
            <SocialIcon url="www.instagram.com" />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default InviteFriendDialog
