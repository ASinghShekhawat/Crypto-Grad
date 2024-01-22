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
    seprator: false,
    path: 'explore',
    title: 'Explore',
    icon: () => <BiCompass />,
  },
  {
    seprator: false,
    path: 'dashboard',
    title: 'AI Dashboard',
    icon: () => <BiGridAlt />,
  },
  {
    seprator: false,
    path: 'chat/chat-genius/newChat',
    title: 'AI Chat',
    icon: () => <BiMessageRoundedDetail />,
  },
  {
    seprator: false,
    path: 'tasks',
    title: 'AI Tasks',
    icon: () => <BiNotepad />,
  },
  {
    seprator: false,
    path: 'trade-ideas',
    title: 'Trade Ideas',
    icon: () => <BiBulb />,
  },
  {
    seprator: false,
    path: 'nfts',
    title: 'NFTs',
    icon: () => <BiSolidBot />,
  },
  {
    seprator: false,
    path: 'pre-sale',
    title: 'Pre-Sale',
    icon: () => <BiCrown />,
  },
  {
    seprator: false,
    path: 'community',
    title: 'Community',
    icon: () => <BiGroup />,
  },
  {
    seprator: true,
    path: 'subscription',
    title: 'Subscription',
    icon: () => <TbCashBanknote />,
  },
  {
    seprator: false,
    path: 'blog',
    title: 'Blog',
    icon: () => <BiAlignLeft />,
  },
  {
    seprator: false,
    path: 'refer',
    title: 'Refer & Earn',
    icon: () => <TbGift />,
  },
  {
    seprator: false,
    path: 'contact',
    title: 'Contact Us',
    icon: () => <BiHeadphone />,
  },
  {
    seprator: false,
    path: '../dashboard',
    title: 'Log Out',
    icon: () => <BiLogOut />,
  },
]
