import { footerLinks } from '@/utils/footer'
import Image from 'next/image'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri'
import localFont from 'next/font/local'
import FooterAccordion from './FooterAccordion'

const larsseit = localFont({
  src: '../../fonts/Larsseit.otf',
  display: 'swap',
})

const Footer = () => {
  return (
    <footer
      className={`mmd:grid flex flex-col gap-12 bg-themeBgBlack px-8 py-8 grid-cols-6 mmd:px-16 mmd:py-12 ${larsseit.className}`}
    >
      <Image
        src={'/cryptogradSmall.svg'}
        height={23}
        width={30}
        alt="brand-logo"
        className="h-20 w-20 object-cover"
      />
      {footerLinks.map((column) => (
        <div key={column.column} className="hidden flex-col gap-6 mmd:flex">
          <div className="text-xl font-medium">{column.column}</div>
          <div className="flex flex-col gap-3">
            {column.links.map((link) => (
              <a href={link.url} key={link.title}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ))}
      <div className="flex w-full flex-col gap-2 mmd:hidden">
        {footerLinks.map((column) => (
          <FooterAccordion
            key={column.column}
            title={column.column}
            menuItems={column.links}
          />
        ))}
      </div>
      <div className="col-span-5 flex flex-col gap-8 pt-12 mmd:col-start-2 mmd:row-start-2 mmd:gap-16 mmd:pb-12 mmd:pt-20">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-xl font-medium">Follow Us On</span>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="">
              <RiFacebookBoxFill className="!text-4xl" />
            </a>
            <a href="">
              <RiLinkedinBoxFill className="!text-4xl" />
            </a>
            <a href="">
              <RiInstagramFill className="!text-4xl" />
            </a>
            <a href="">
              <FaSquareXTwitter className="!text-3xl" />
            </a>
          </div>
        </div>
        <div className="text-xs !font-extralight italic opacity-50">
          © Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
    </footer>
  )
}

export default Footer
