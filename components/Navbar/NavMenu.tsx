import Link from 'next/link'
import NavDropdown from './NavDropdown'
import NavAccordion from './NavAccordion'
import { IDrawerGeneric } from '@/types/navbar'

const navMenuDropdowns = [
  // {
  //   title: 'Courses',
  //   menuItems: [
  //     {
  //       title: 'Novice',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Intermediate',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Experienced',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Master',
  //       path: '/',
  //       target: false,
  //     },
  //   ],
  // },
  {
    title: 'CG AI',
    menuItems: [
      {
        title: 'ChatGenius ',
        path: '/',
        target: false,
      },
      {
        title: 'TradeAnalyzer',
        path: '/',
        target: false,
      },
      {
        title: 'ContractInsight',
        path: '/',
        target: false,
      },
      {
        title: 'CryptoBuzz ',
        path: '/',
        target: false,
      },
    ],
  },
  {
    title: 'Dapps',
    menuItems: [
      {
        title: 'Blogs',
        path: '/',
        target: false,
      },
      {
        title: 'News',
        path: '/',
        target: false,
      },
      {
        title: 'Swap',
        path: '/',
        target: false,
      },
      {
        title: 'Mint',
        path: '/mint',
        target: false,
      },
    ],
  },
  {
    title: 'Community',
    menuItems: [
      {
        title: 'Discord',
        path: 'https://discord.gg/M9dNdA4FWW',
        target: true,
      },
      {
        title: 'Telegram',
        path: 'https://discord.gg/M9dNdA4FWW',
        target: true,
      },
      // {
      //   title: 'Instagram',
      //   path: 'https://www.instagram.com/cryptogradofficial/',
      //   target: true,
      // },
      {
        title: 'Twitter',
        path: 'https://twitter.com/cgradofficial',
        target: true,
      },
    ],
  },
]

const NavMenu = ({ drawer, pathname }: IDrawerGeneric) => {
  return (
    <div
      className={`flex ${
        drawer ? 'flex-col' : 'flex-row'
      } items-center gap-4 font-medium`}
    >
      {pathname === '/' && (
        <>
          <Link
            href="/presale"
            className={`transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Pre-Sale
          </Link>
          {!drawer &&
            navMenuDropdowns.map((item) => (
              <NavDropdown
                key={item.title}
                title={item.title}
                menuItems={item.menuItems}
              />
            ))}
          {drawer &&
            navMenuDropdowns.map((item) => (
              <NavAccordion
                key={item.title}
                title={item.title}
                menuItems={item.menuItems}
              />
            ))}
          <Link
            href="/"
            className={`transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Swap
          </Link>
          <Link
            href="/"
            className={`transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            CG NFTs
          </Link>
        </>
      )}

      {/* <Link
        href="/"
        className={`transition-all hover:text-themeVioletText ${
          drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
        }`}
      >
        Market
      </Link> */}
      {pathname.includes('/presale') && (
        <>
          <Link
            href="/"
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            How to Buy
          </Link>
          <Link
            href="/presale#tokenomics"
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Tokenomics
          </Link>
          <Link
            href="/presale#roadmap"
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Roadmap
          </Link>
          <Link
            href="/presale#growth"
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Refer & Earn
          </Link>
          <Link
            href="/help/FAQ"
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            FAQ
          </Link>
        </>
      )}
    </div>
  )
}

export default NavMenu
