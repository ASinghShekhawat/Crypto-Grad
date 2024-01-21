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
    path: 'trade-ideas',
    title: 'Trade Ideas',
    icon: () => <BiBulb />,
  },
  {
    path: 'nfts',
    title: 'NFTs',
    icon: () => <BiSolidBot />,
  },
  {
    path: 'pre-sale',
    title: 'Pre-Sale',
    icon: () => <BiCrown />,
  },
  {
    path: 'community',
    title: 'Community',
    icon: () => <BiGroup />,
  },
  {
    path: 'subscription',
    title: 'Subscription',
    icon: () => <TbCashBanknote />,
  },
  {
    path: 'blog',
    title: 'Blog',
    icon: () => <BiAlignLeft />,
  },
  {
    path: 'refer',
    title: 'Refer & Earn',
    icon: () => <TbGift />,
  },
  {
    path: 'contact',
    title: 'Contact Us',
    icon: () => <BiHeadphone />,
  },
  {
    path: '../dashboard',
    title: 'Log Out',
    icon: () => <BiLogOut />,
  },
]
