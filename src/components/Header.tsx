"use client"

import Link from "next/link"
import { useContext } from "react";
import ThemeContext from "@/context/themeContext";

// import icons
import { FaUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header = () => {
  // use context for theme
  const {darkTheme, setDarkTheme} = useContext(ThemeContext);

  return (
    <header className="py-8 px-[5%] mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between items-center">
      <div className="flex items-baseline w-full md:w-2/3 justify-center md:justify-start">
        <Link href="/" className="text-brandText text-3xl font-semibold">GUITARWORLD</Link>
      </div>
      <ul className="flex items-baseline justify-between w-full md:w-1/3 mt-2">
        <li className="hover:text-lightTextHover">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-lightTextHover">
          <Link href="/guitars">Guitars</Link>
        </li>
        <li className="hover:text-lightTextHover">
          <Link href="/contact">Contact</Link>
        </li>
        <div className="hidden lg:flex">
          {darkTheme ? 
            <li className="mr-5 cursor-pointer text-[#EEC759] hover:text-[#FFF78A]">
            <FaSun
              onClick={() => {
                setDarkTheme(false);
                localStorage.setItem("theme", "false");
              }}
            />
          </li> 
           : 
            <li className="mr-5 cursor-pointer text-[#5e5e5e] hover:text-[#a6a6a6]">
            <FaMoon 
              onClick={() => {
                setDarkTheme(true);
                localStorage.removeItem("theme");
              }}
            />
          </li> 
          }         
          <li className="flex items-center text-[#5e5e5e] hover:text-[#a6a6a6] dark:text-[#b7b7b7] dark:hover:text-[#e7e7e7]">
            <Link href="/auth">
              <FaUser />
            </Link>
          </li>
        </div>
      </ul>
    </header>
  )
}

export default Header
