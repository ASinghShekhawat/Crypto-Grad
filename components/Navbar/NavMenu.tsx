import Link from 'next/link'
import NavDropdown from './NavDropdown'
import NavAccordion from './NavAccordion'
import { IDrawerGeneric } from '@/types/navbar'

const navMenuDropdowns = [
  {
    title: 'Courses',
    menuItems: [
      {
        title: 'Novice',
        path: '/',
        target: false
      },
      {
        title: 'Intermediate',
        path: '/',
        target: false
      },
      {
        title: 'Experienced',
        path: '/',
        target: false
      },
      {
        title: 'Master',
        path: '/',
        target: false
      },
    ],
  },
  {
    title: 'Crypto',
    menuItems: [
      {
        title: 'Blogs',
        path: '/',
        target: false
      },
      {
        title: 'News',
        path: '/',
        target: false
      },
      {
        title: 'Swap',
        path: '/',
        target: false
      },
      {
        title: 'Mint',
        path: '/mint',
        target: false
      },
    ],
  },
  {
    title: 'Community',
    menuItems: [
      {
        title: 'Discord',
        path: 'https://twitter.com/cgradofficial',
        target: true
      },
      {
        title: 'Instagram',
        path: 'https://www.instagram.com/cryptogradofficial/',
        target: true
      },
      {
        title: 'Twitter ',
        path: 'https://twitter.com/cgradofficial',
        target: true
      },
    ],
  },
]

const NavMenu = ({ drawer }: IDrawerGeneric) => {
  return (
    <div
      className={`flex ${
        drawer ? 'flex-col' : 'flex-row'
      } items-center gap-4 font-medium`}
    >
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
        Market
      </Link>
    </div>
  )
}

export default NavMenu
