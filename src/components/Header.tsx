import Link from "next/link"
import { FaRegUser } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-10 px-[5%] mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between items-center">
      <div className="flex items-baseline w-full md:w-2/3">
        <Link href="/" className="text-[#7b4e27] text-3xl font-semibold">GUITARWORLD</Link>
        <ul className="flex ml-5">
          <li className="flex items-center">
            <Link href="/auth">
              <FaRegUser className="text-[#494949] text-[22px]" />
            </Link>
          </li>
          <li className="ml-5">
            <FaRegMoon className="text-[#494949] text-[22px] cursor-pointer" />
          </li>
        </ul>
      </div>
      <ul className="flex items-baseline justify-between w-full md:w-1/3 max-w-[350px] mt-2">
        <li className="hover:text-[#bcbcbc] hover:underline underline-offset-4">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-[#bcbcbc] hover:underline underline-offset-4">
          <Link href="/guitars">Guitars</Link>
        </li>
        <li className="hover:text-[#bcbcbc] hover:underline underline-offset-4">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
