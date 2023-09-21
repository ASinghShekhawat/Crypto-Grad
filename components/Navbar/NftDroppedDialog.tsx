import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import Button from "../shared/Button";
import { IoClose } from "react-icons/io5";

export default function NftDroppedDialog() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform relative overflow-hidden rounded-2xl bg-themeDialogBlack p-6 text-left align-middle shadow-xl transition-all">
                <Image
                  src="/Navbar/nft-dropped.png"
                  width={948}
                  height={370}
                  alt="nft-dropped"
                  className="object-contain"
                />
                <button
                  onClick={closeModal}
                  className="border-none rounded-full p-2 outline-none absolute top-4 right-4 hover:bg-themeBgBlack"
                >
                  <IoClose className="text-2xl hover:text-themeVioletText transition-all " />
                </button>
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col text-center items-center justify-center">
                    <div className="text-2xl font-semibold">NFTs Dropped!</div>
                    <div className="font-extralight text-sm">
                      And get an early access to the exciting world of crypto!
                    </div>
                  </div>
                  <Button>Claim Now</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
