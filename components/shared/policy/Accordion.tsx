'use client'

import { Disclosure } from '@headlessui/react'
import { ReactNode } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

interface IAccordion {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: IAccordion) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="w-full border-b border-[#5D0089CC] p-4">
          <Disclosure.Button className="flex w-full items-center justify-between text-xl font-semibold">
            <span className='text-left'>{title}</span>
            {open ? <FaMinus /> : <FaPlus />}
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 font-medium leading-relaxed opacity-80">
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
