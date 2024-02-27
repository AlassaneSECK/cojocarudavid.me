"use client";

import LogoDark from "@/public/logo-dark.svg";
import LogoWhite from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";

export default function Navbar() {
  const data = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },

  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={LogoWhite} width={35} height={35} alt="logo" className="cursor-pointer hover:rotate-6 duration-300 hover:skew-y-3 hidden dark:block" />
            <Image src={LogoDark} width={35} height={35} alt="logo" className="cursor-pointer hover:rotate-6 duration-300 hover:skew-y-3 dark dark:hidden" />
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={'font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base border-b-2 border-transparent'}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
