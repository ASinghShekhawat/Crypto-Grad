import { BiMessageRoundedDetail } from 'react-icons/bi'
import { TbCashBanknote } from 'react-icons/tb'
import { TbGift } from 'react-icons/tb'

export const sidebarItems = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    icon: () => <BiMessageRoundedDetail />,
  },
  {
    path: 'transactions',
    title: 'Transactions',
    icon: () => <TbCashBanknote />,
  },
  {
    path: 'refer',
    title: 'Refer & Earn',
    icon: () => <TbGift />,
  },
]
