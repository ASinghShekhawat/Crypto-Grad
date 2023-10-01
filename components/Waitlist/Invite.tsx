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
    <Page className="flex items-end justify-center !p-0 md:items-center md:!p-8">
      <div className="relative">
        <button className="absolute right-0 top-0 -mr-0 -mt-12 hidden rounded-full bg-themeBgBlack px-2 py-2 text-white md:block">
          <X size={20} />
        </button>
        <div className="flex flex-col gap-8 rounded-3xl p-0 md:w-[440px] md:bg-themeBlack md:p-12">
          <h2 className="text-2xl font-semibold text-white md:text-left md:text-3xl">
            Invite your friends
          </h2>
          <p className="text-sm font-light text-white opacity-80 md:text-left">
            Win More CG tokens and climb up the Leaderboard
          </p>
          <div className="w-full rounded-lg border border-themeTextGrey bg-transparent px-4 py-2 text-themeTextGrey/50 placeholder-themeTextGrey">
            www.cryptograd/refer/john13
          </div>

          <Button className="w-full md:w-fit">Copy Invite Code</Button>
          <div className="flex gap-4">
            <SocialIcon className="!h-8 !w-8" url="www.whatsapp.com" />
            <SocialIcon className="!h-8 !w-8" url="www.facebook.com" />
            <SocialIcon className="!h-8 !w-8" url="www.twitter.com" />
            <SocialIcon className="!h-8 !w-8" url="www.linkedin.com" />
            <SocialIcon className="!h-8 !w-8" url="www.instagram.com" />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default InviteFriendDialog
