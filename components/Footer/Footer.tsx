import { footerLinks } from '@/utils/footer'
import Image from 'next/image'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {
  RiDiscordFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri'
import localFont from 'next/font/local'
import FooterAccordion from './FooterAccordion'
import { FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

const larsseit = localFont({
  src: '../../fonts/Larsseit.otf',
  display: 'swap',
})

const Footer = () => {
  return (
    <footer
      className={`bg-themeBgBlack px-8 py-8 mmd:px-16 mmd:pb-16 mmd:pt-20 ${larsseit.className}`}
    >
      <div
        className={`flex w-full grid-cols-7 flex-col gap-12 mmd:mx-auto mmd:grid mmd:w-fit`}
      >
        <Image
          src={'/cryptogradSmall.svg'}
          height={23}
          width={30}
          alt="brand-logo"
          className="w-20 object-cover mmd:col-span-2"
        />
        {footerLinks.map((column) => (
          <div key={column.column} className="hidden flex-col gap-6 mmd:flex">
            <div className="text-xl font-medium">{column.column}</div>
            <div className="flex flex-col gap-3">
              {column.links.map((link) => (
                <Link
                  target={link.target ? '_blank' : '_self'}
                  href={link.url}
                  key={link.title}
                >
                  {link.title}
                </Link>
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
        <div className="col-span-5 flex flex-col gap-8 pt-12 mmd:col-start-3 mmd:row-start-2 mmd:gap-16 mmd:pb-12 mmd:pt-20">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-xl font-medium">Follow Us On</span>
            <div className="flex items-center gap-2 md:gap-4">
              <a
                href="https://discord.gg/GQJTSFdTwh"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RiDiscordFill className="!text-4xl" />
              </a>
              {/* <a
                href="https://www.linkedin.com/company/cryptograd"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RiLinkedinBoxFill className="!text-4xl" />
              </a> */}
              <a
                href="https://t.me/cryptogradportal"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTelegramPlane className="!text-4xl" />
              </a>
              <a
                href="https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaSquareXTwitter className="!text-3xl" />
              </a>
            </div>
          </div>
          <div className="text-xs !font-extralight italic opacity-50">
            © {new Date().getFullYear()} Cryptograd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
