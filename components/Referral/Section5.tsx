import { ButtonType } from '@/types/buttton'
import Button from '../shared/Button'
import StakingBenefits from '../shared/StakingBenefits'

export default function Section5() {
  return (
    <div className="flex flex-col items-center justify-center">
      <StakingBenefits />
      <Button type={ButtonType.SECONDARY} className="mt-8">
        Know More
      </Button>
    </div>
  )
}
