'use client'

import { Disclosure } from '@headlessui/react'
import { ReactNode } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

interface IAccordion {
  title: string
  children: ReactNode
  className?: string
  togglePanels: any
  index: number
}

export default function Accordion({
  title,
  children,
  className,
  togglePanels,
  index,
}: IAccordion) {
  return (
    <Disclosure>
      {(panel) => {
        const { open, close } = panel
        return (
          <div
            className={`w-full border-b border-[#5D0089CC] ${className} p-4`}
          >
            <Disclosure.Button
              onClick={() => {
                if (!open) {
                  close()
                }

                togglePanels({ ...panel, key: index })
              }}
              className="flex w-full items-center justify-between text-xl font-semibold"
            >
              <span className="text-left">{title}</span>
              {open ? <FaMinus /> : <FaPlus />}
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 font-medium leading-relaxed opacity-80">
              {children}
            </Disclosure.Panel>
          </div>
        )
      }}
    </Disclosure>
  )
}
