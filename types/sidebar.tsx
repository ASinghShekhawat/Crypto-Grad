import {
  BiAlignLeft,
  BiBulb,
  BiCompass,
  BiCrown,
  BiGridAlt,
  BiGroup,
  BiHeadphone,
  BiLogOut,
  BiMessageRoundedDetail,
  BiNotepad,
  BiSolidBot,
} from 'react-icons/bi'
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
export const aiSidebarItems = [
  {
    path: 'explore',
    title: 'Explore',
    icon: () => <BiCompass />,
  },
  {
    path: 'dashboard',
    title: 'AI Dashboard',
    icon: () => <BiGridAlt />,
  },
  {
    path: 'chat',
    title: 'AI Chat',
    icon: () => <BiMessageRoundedDetail />,
  },
  {
    path: 'tasks',
    title: 'AI Tasks',
    icon: () => <BiNotepad />,
  },
  {
    path: 'landing',
    title: 'Trade Ideas',
    icon: () => <BiBulb />,
  },
  {
    path: 'landing',
    title: 'NFTs',
    icon: () => <BiSolidBot />,
  },
  {
    path: 'landing',
    title: 'Pre-Sale',
    icon: () => <BiCrown />,
  },
  {
    path: 'landing',
    title: 'Community',
    icon: () => <BiGroup />,
  },
  {
    path: 'landing',
    title: 'Subscription',
    icon: () => <TbCashBanknote />,
  },
  {
    path: 'landing',
    title: 'Blog',
    icon: () => <BiAlignLeft />,
  },
  {
    path: 'landing',
    title: 'Refer & Earn',
    icon: () => <TbGift />,
  },
  {
    path: 'landing',
    title: 'Contact Us',
    icon: () => <BiHeadphone />,
  },
  {
    path: 'landing',
    title: 'Log Out',
    icon: () => <BiLogOut />,
  },
]
