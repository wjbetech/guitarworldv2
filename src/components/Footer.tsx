import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-6 w-full text-center flex flex-col gap-6 md:grid md:grid-cols-3">
      <div className="">
        <h1 className="text-2xl mb-4 text-amber-900">Design</h1>
        <ul className="flex flex-col gap-2">
          <li>Next.js</li>
          <li>Tailwind</li>
          <li>Sanity.io</li>
          <li>Stripe</li>
        </ul>
      </div>
      <div className="">
        <h1 className="text-2xl mb-4 text-amber-900">Site</h1>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Filler</Link>
          </li>
          <li>
            <Link href="/">Filler</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="text-2xl mb-4 text-amber-900">Links</h1>
        <ul className="flex flex-col gap-2 text-center items-center">
          <li className="flex">
            <Link href="/" className="flex items-center gap-2">
              <FaGithub /><span>@wjbetech</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center gap-2">
              <MdMailOutline /><span>wjbetech@gmail.com</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
