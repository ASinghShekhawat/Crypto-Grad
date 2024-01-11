import Image from 'next/image'
import { MdLockOutline } from 'react-icons/md'

export default function Perks() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative flex items-center gap-4 rounded-lg bg-themeBgBlack p-4">
        <MdLockOutline className="absolute right-4 top-4 text-3xl text-white/30" />
        <Image
          src="/WLpictures/coin.png"
          alt=""
          width={80}
          height={81}
          className="h-20 w-20"
        />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-medium">Write title here****</div>
          <div className="text-white/60">
            Staking allows the members to be eligible for 3 round of Free NFT
            Airdrops
          </div>
        </div>
      </div>
      <div className="relative flex items-center gap-4 rounded-lg bg-themeBgBlack p-4">
        <MdLockOutline className="absolute right-4 top-4 text-3xl text-white/30" />
        <Image
          src="/WLpictures/coin.png"
          alt=""
          width={80}
          height={81}
          className="h-20 w-20"
        />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-medium">Write title here****</div>
          <div className="text-white/60">
            The higher the amount of TGK tokens staked, the rarer the NFT a
            member receives
          </div>
        </div>
      </div>
      <div className="relative flex items-center gap-4 rounded-lg bg-themeBgBlack p-4">
        <MdLockOutline className="absolute right-4 top-4 text-3xl text-white/30" />
        <Image
          src="/WLpictures/coin.png"
          alt=""
          width={80}
          height={81}
          className="h-20 w-20"
        />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-medium">Write title here****</div>
          <div className="text-white/60">
            Receive a static 275% APY paid in $TGK as a benefit of staking
          </div>
        </div>
      </div>
    </div>
  )
}
