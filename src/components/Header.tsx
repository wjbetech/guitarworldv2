import Link from "next/link"
import { FaRegUser } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8 px-[5%] mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between items-center">
      {/* FIND TITLE COLOR HERE ('text-browntext') */}
      <div className="flex items-baseline w-full md:w-2/3">
        <Link href="/" className="text-browntext text-3xl font-semibold">GUITARWORLD</Link>
      </div>
      <ul className="flex items-baseline justify-between w-full md:w-1/3 max-w-[350px] mt-2">
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
            <FaRegMoon className="text-lighttext text-[22px] cursor-pointer" />
          </li>
          <li className="flex items-center">
            <Link href="/auth">
              <FaRegUser className="text-[#3d3d3d] text-[22px]" />
            </Link>
          </li>
        </div>
      </ul>
    </header>
  )
}

export default Header
