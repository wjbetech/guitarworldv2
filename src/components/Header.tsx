"use client"

import Link from "next/link"
import { useContext } from "react";
import ThemeContext from "@/context/themeContext";

// import icons
import { FaRegUser } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  // use context for theme
  const {darkTheme, setDarkTheme} = useContext(ThemeContext);

  return (
    <header className="py-8 px-[5%] mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between items-center">
      {/* FIND TITLE COLOR HERE ('text-browntext') */}
      <div className="flex items-baseline w-full md:w-2/3 justify-center md:justify-start">
        <Link href="/" className="text-browntext text-3xl font-semibold">GUITARWORLD</Link>
      </div>
      <ul className="flex items-baseline justify-between w-full md:w-1/3 mt-2">
        <li className="hover:text-[#bcbcbc] hover:underline underline-offset-4">
          <Link href="/" className="text-lighttext">Home</Link>
        </li>
        <li className="hover:text-[#bcbcbc] hover:underline underline-offset-4">
          <Link href="/guitars" className="text-lighttext">Guitars</Link>
        </li>
        <li className="hover:text-[#bcbcbc] hover:underline underline-offset-4">
          <Link href="/contact" className="text-lighttext">Contact</Link>
        </li>
        <div className="hidden lg:flex">
          <li className="mr-5">
            {darkTheme? <FaRegMoon className="text-[22px] cursor-pointer" /> : <FaRegMoon />}
          </li>
          <li className="flex items-center">
            <Link href="/auth">
              {darkTheme? <FaRegUser className="text-[22px] cursor-pointer" /> : <FaRegUser />}
            </Link>
          </li>
        </div>
      </ul>
    </header>
  )
}

export default Header
