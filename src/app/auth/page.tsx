import { FcGoogle } from "react-icons/fc";

const Auth = () => {

  const inputStyles = "block w-full rounded-md text-slate-900 py-2 px-3 border-b-4 border-slate-800 dark:border-slate-300 focus:outline-none focus:border-slate"

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-[25px] flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p>OR</p>
          <span className="inline-flex items-center border-2 border-slate-400 p-2 rounded-md hover:bg-white dark:hover:bg-slate-700 cursor-pointer">
            <FcGoogle className="cursor-pointer text-xl" />
          </span>
        </div>

        {/* account creation form */}
        <form className="space-y-4 md:space-y-6">
          <input 
            type="text" 
            name="name"
            id="name"
            className={inputStyles}
            placeholder="John Smith"
            required
          />
          <input 
            type="email" 
            name="email"
            id="email"
            className={inputStyles}
            placeholder="example@gmail.com"
            required
          />
          <input 
            type="password" 
            name="password"
            id="password"
            className={inputStyles}
            placeholder="***********"
            minLength={9}
            required
          />
          <button type="submit" className="border-2 border-slate-400 rounded-md p-2 hover:bg-white dark:hover:bg-slate-700">Create Account</button>
        </form>
      </div>
    </section>
  )
}

export default Auth
