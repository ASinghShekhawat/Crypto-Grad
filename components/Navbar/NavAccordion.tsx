"use client";

import { INavDropdown } from "@/types/navbar";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const NavAccordion = ({ title, menuItems }: INavDropdown) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex flex-col gap-2 w-full">
          <Disclosure.Button className="flex justify-between font-medium items-center hover:text-themeVioletText transition-all px-2 py-1 hover:bg-themeBgBlack w-full rounded-md">
            {title}
            <FaChevronDown className={`!text-sm hover:text-themeVioletText transition-all ${open && "rotate-180"}`}/>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className='w-full'
          >
            <Disclosure.Panel className="w-full flex flex-col gap-2 text-sm p-1 rounded-md bg-themeBgBlack/40 backdrop-blur-md">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className="hover:text-themeVioletText hover:bg-themeBgBlack flex w-full transition-all items-center rounded-md px-2 py-1 text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default NavAccordion;
