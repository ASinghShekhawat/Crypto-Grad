'use client'

import { ButtonType } from '@/types/buttton'
import Button from '../shared/Button'

export default function StakeRewards() {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-themeBgBlack p-4">
      <div className="flex flex-col gap-2">
        <div className="text-sm">You have earned</div>
        <div className="flex items-center gap-2 text-2xl font-medium">
          {1111}{' '}
          <span className="text-sm font-light text-white/30">Rewards</span>
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="h-12 w-full !text-sm !px-2" type={ButtonType.SECONDARY}>
          Claim Rewards
        </Button>
        <Button className="h-12 w-full !text-sm !px-2">Stake Tokens</Button>
      </div>
    </div>
  )
}
