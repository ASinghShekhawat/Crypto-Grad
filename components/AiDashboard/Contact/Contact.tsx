'use client'

import Button from '@/components/shared/Button'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const services = [
  {
    name: 'Chat AI',
  },
  {
    name: 'CG Token',
  },
]

const Contact = () => {
  const [selected, setSelected] = useState({ name: '' })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="pageHeight flex w-full flex-col gap-16 p-4 md:p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-2xl font-semibold">Schedule A Call</div>
        <div className="w-full">
          Sync your schedules, crank up the communication! Schedule a call with
          cryptograd AI support team.
        </div>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            <Listbox.Button className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-left text-lg outline-none">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">
                <FaChevronDown />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlack py-1 text-base shadow-lg ring-1 ring-themeBlackDeep focus:outline-none">
                {services.map((service, serviceIdx) => (
                  <Listbox.Option
                    key={serviceIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none px-4 py-2 ${
                        active ? 'bg-themeBorderBlue' : ''
                      }`
                    }
                    value={service}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {service.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <Button
          disabled={!selected.name}
          onClick={() => {}}
          className="h-12 w-full md:!w-64"
        >
          Schedule Now
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-2xl font-semibold">Send Us A Message</div>
        <div className="w-full">
          The quickest way to our hearts? Send us a message and we will get back
          to you within 48 hours.
        </div>
        <div className="flex w-full flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            autoComplete="off"
            className="w-full resize-none rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
        </div>
        <Button disabled onClick={() => {}} className="h-12 w-full md:!w-64">
          Submit Form
        </Button>
      </div>
    </div>
  )
}

export default Contact
