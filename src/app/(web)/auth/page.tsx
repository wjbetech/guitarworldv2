"use client"

import { FcGoogle } from "react-icons/fc";
import { ChangeEvent, FormEvent, useState } from "react";
import { signUp } from "next-auth-sanity/client"
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";

// default data for our form
const defaultFormState = {
  name: "",
  email: "",
  password: "",
}

const Auth = () => {


  const [formData, setFormData] = useState(defaultFormState);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const { data: session } = useSession();

  console.log(session);

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      
    } catch (error) {
      console.log(error);
      toast.error("Login failed, please try again!");
    }
  }
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await signUp(formData);
      if (user) { 
        toast.success("Successfully signed up! Please log in.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect details. Please try again.");
    }
    setFormData(defaultFormState);
  }

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
        <form className="account-creation-form" onSubmit={handleSubmit}>
          <label className="font-semibold">Name</label>
          <input 
            type="text" 
            name="name"
            id="name"
            value={formData.name}
            className="default-input"
            placeholder="John Smith"
            required
            onChange={handleInput}
          />
          <label className="font-semibold">Email</label>
          <input 
            type="email" 
            name="email"
            id="email"
            value={formData.email}
            className="default-input"
            placeholder="example@gmail.com"
            required
            onChange={handleInput}
          />
          <label className="font-semibold">Password</label>
          <input 
            type="password" 
            name="password"
            id="password"
            value={formData.password}
            className="default-input"
            placeholder="***********"
            minLength={9}
            required
            onChange={handleInput}
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
