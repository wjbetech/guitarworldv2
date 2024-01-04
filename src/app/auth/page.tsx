import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[60%] max-w-[500px] mx-auto">
        <div className="flex mb-[25px] flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <span className="inline-flex items-center border-2 p-2 rounded-md cursor-pointer ">
            <FcGoogle className="cursor-pointer text-xl" />
          </span>
        </div>

        {/* account creation form */}
        <form className="space-y-4 md:space-y-6 p-4 border-2 bg-lightBackground dark:bg-darkBackground rounded-lg shadow-md">
          <label>Name</label>
          <input 
            type="text" 
            name="name"
            id="name"
            className="default-input"
            placeholder="John Smith"
            required
          />
          <input 
            type="email" 
            name="email"
            id="email"
            className="default-input"
            placeholder="example@gmail.com"
            required
          />
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
      </div>
    </section>
  )
}

export default Auth
