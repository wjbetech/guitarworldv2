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
    <header className="main-header">
      <div className="header">
        <Link href="/" className="brand">GUITARWORLD</Link>
      </div>
      <ul className="nav-texts">
        <li className="hover:text-amber-900">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-amber-900">
          <Link href="/guitars">Guitars</Link>
        </li>
        <li className="hover:text-amber-900">
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
          <li className="account-icon">
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
