"use client";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/Images/logo.jpg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navigation = [
    { name: "home", href: "/", mobileName: "Home" },
    { name: "projects", href: "/project", mobileName: "Projects" },
    { name: "about Me", href: "/about", mobileName: "About Me" },
    { name: "contact Me", href: "/contact", mobileName: "Contact Me" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu whenever the pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close the mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav
      className="sticky top-0 z-10 bg-[#282C33] container max-w-5xl px-1 sm:px-2 mx-auto"
      ref={menuRef}
    >
      <div className="flex h-fit items-end justify-between py-2">
        {/* Mobile menu button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-purple-300 hover:bg-gray-700 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-300"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end sm:items-end sm:justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/">
              <Image src={logo} width={40} alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-white border-b border-purple-500"
                      : "text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-white"
                  } text-base font-medium`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span className="text-purple-500 pe-[2px]">#</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute left-0 px-2 w-full bg-[#282C33] sm:hidden">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "bg-purple-500 bg-opacity-40 text-white"
                    : "text-gray-300 hover:bg-purple-500 hover:bg-opacity-40 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium w-fit`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.mobileName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
