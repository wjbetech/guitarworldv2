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
        <div className="icons flex">
          {darkTheme ? 
            <li className="cursor-pointer text-[#EEC759] hover:text-[#FFF78A]">
            <FaSun
              onClick={() => {
                setDarkTheme(false);
                localStorage.setItem("theme", "false");
              }}
            />
          </li> 
           : 
            <li className="cursor-pointer text-[#5e5e5e] hover:text-[#a6a6a6]">
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
      </div>
      <ul className="nav-texts">
        <li className="hover:text-amber-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-amber-600">
          <Link href="/guitars">Guitars</Link>
        </li>
        <li className="hover:text-amber-600">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
