"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    {
      name: "home",
      href: "/",
      current: pathname === "/",
      mobileName: "Home",
    },
    {
      name: "projects",
      href: "project",
      current: pathname === "/project",
      mobileName: "Projects",
    },
    {
      name: "about Me",
      href: "about",
      current: pathname === "/about",
      mobileName: "About Me",
    },
    {
      name: "contact Me",
      href: "contact",
      current: pathname === "/contact",
      mobileName: "Contact Me",
    },
  ];
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 container mx-auto px-2 sm:px-6 lg:px-24"
    >
      {({ open }) => (
        <>
          <div className="relative flex h-fit items-end justify-between py-1 backdrop-blur-lg">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-purple-300 hover:bg-gray-700 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-300">
                <span className="absolute -inset-0.5 " />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-end sm:items-end sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <a href="/">
                  <Image src={logo} width={40} alt="sourav" />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={
                        item.current
                          ? "text-white border-b border-purple-500 text-base font-medium"
                          : "text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-white text-base font-medium"
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      <span className="text-purple-500 pe-[2px]">#</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden backdrop-blur-sm">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    item.current
                      ? "bg-purple-500 bg-opacity-40 text-white block rounded-md px-3 py-2 text-base font-medium w-fit"
                      : "text-gray-300 hover:bg-purple-500 hover:bg-opacity-40 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-fit"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.mobileName}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
