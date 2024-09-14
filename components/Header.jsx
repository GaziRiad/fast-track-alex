"use client";

import Link from "next/link";
import Logo from "./Logo";

import { IoMenu } from "react-icons/io5";
import Button from "./ui/Button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavItems = [
  {
    link: "Features",
    href: "#",
  },
  {
    link: "Process",
    href: "#",
  },
  {
    link: "About Us",
    href: "#",
  },
  {
    link: "FAQ",
    href: "#",
  },
  {
    link: "Blog",
    href: "/blog",
  },
  {
    link: "Sign In",
    href: "#",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary-700 px-5 text-white">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between py-5 text-base font-bold tracking-wide">
        <Logo />
        <ul className="hidden items-center gap-10 lg:flex">
          {NavItems.map((item) => (
            <li
              key={item.link}
              className="cursor-pointer transition-all hover:text-accent-700"
            >
              <Link href={item.href}>{item.link}</Link>
            </li>
          ))}
          <li>
            <Button>Get Started</Button>
          </li>
        </ul>
        <span
          className="cursor-pointer text-white transition-all duration-300 hover:text-accent-700 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <IoMenu size={30} />
        </span>
      </nav>
      <aside
        className={`fixed inset-0 z-50 bg-primary-700 p-5 opacity-100 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <span
            className="cursor-pointer text-white transition-all duration-300 hover:text-accent-700 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={30} />
          </span>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-10 pb-8">
          {NavItems.map((item) => (
            <Link
              key={item.link}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="mb-3 block text-lg font-bold text-[#F3F4F6] transition-all duration-300 hover:text-accent-700"
            >
              {item.link}
            </Link>
          ))}

          <Button onClick={() => setIsOpen(false)}>Get Started</Button>
        </div>
      </aside>
    </header>
  );
}

export default Header;
