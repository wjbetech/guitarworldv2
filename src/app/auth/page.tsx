import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <section className="container mx-auto mt-[72px] mb-52">
      <div className="space-y-4 md:space-y-6 w-[60%] max-w-[500px] mx-auto">
        <div className="flex mb-[25px] flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <span className="inline-flex items-center border-2 mt-4 md:mt-0 p-2 rounded-md cursor-pointer hover:bg-zinc-200 hover:border-zinc-400 dark:hover:bg-zinc-700 transition-all ease-in-out">
            <FcGoogle className="cursor-pointer text-xl" />
          </span>
        </div>

        {/* account creation form */}
        <form className="account-creation-form">
          <label className="font-semibold">Name</label>
          <input 
            type="text" 
            name="name"
            id="name"
            className="default-input"
            placeholder="John Smith"
            required
          />
          <label className="font-semibold">Email</label>
          <input 
            type="email" 
            name="email"
            id="email"
            className="default-input"
            placeholder="example@gmail.com"
            required
          />
          <label className="font-semibold">Password</label>
          <input 
            type="password" 
            name="password"
            id="password"
            className="default-input"
            placeholder="***********"
            minLength={9}
            required
          />
          <button type="submit" className="create-acc-button">Create Account</button>
        </form>

        <div>
          <span className="text-sm">Already registered?</span>
          <button className="create-acc-button">Log In</button>
        </div>
      </div>
    </section>
  )
}

export default Auth
