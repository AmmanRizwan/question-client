import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

  const { signUpData, setSignUpData, signUpSubmit } = useContext(DataContext);
  const [hidePassword, setHidePassword] = useState("password");
  const [hideConfirmPassword, setHideConfirmPassword] = useState("password");

  
    useEffect(() => {
      if (signUpData.password === "") {
        setSignUpData((prev) => ({...prev, password_style: ""}));
      }
      else if (signUpData.password.length < 5) {
        setSignUpData((prev) => ({...prev, password_style: "input-error"}));
      }
      else if (signUpData.password.length >= 10) {
        setSignUpData((prev) => ({...prev, password_style: "input-success"}));
      }
  
      if (signUpData.email === "") {
        setSignUpData((prev) => ({...prev, email_style: ""}));
      }
      else if (signUpData.email.slice(-4) !== ".com" && signUpData.email.search("@") === -1) {
        setSignUpData((prev) => ({...prev, email_style: "input-error"}));
      }
      else if (signUpData.email.slice(-4) === ".com" && signUpData.email.search("@") !== -1) {
        setSignUpData((prev) => ({...prev, email_style: "input-success"}));
      }
      
      if (signUpData.name === "") {
        setSignUpData((prev) => ({...prev, name_style: ""}));
      }
      else if (signUpData.name.length < 3) {
        setSignUpData((prev) => ({...prev, name_style: "input-error"}));
      }
      else if (signUpData.name.length >= 3) {
        setSignUpData((prev) => ({...prev, name_style: "input-success"}));
      }
      
      if (signUpData.confirmpassword === "") {
        setSignUpData((prev) => ({...prev, confirm_style: ""}));
      }
      else if (signUpData.confirmpassword !== signUpData.password) {
        setSignUpData((prev) => ({...prev, confirm_style: 'input-error'}));
      }
      else if (signUpData.confirmpassword === signUpData.password) {
        setSignUpData((prev) => ({...prev, confirm_style: 'input-success'}));
      }
    }, [signUpData.email, signUpData.password, signUpData.name, signUpData.confirmpassword])

  return (
    <div className="min-h-screen flex justify-center items-center select-none">
      <div className="w-full sm:w-[450px] bg-black sm:px-8 py-10 sm:rounded-md">
          <h1 className="text-2xl sm:text-4xl font-bold md:font-semibold mb-10 ml-10 sm:ml-0">Sign Up</h1>
      <form onSubmit={signUpSubmit} className="flex text-xl flex-col justify-center gap-4 my-4 px-12">
        <label className={`input text-sm input-bordered ${signUpData.name_style} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" value={signUpData.name} onChange={(e) => setSignUpData((prev) => ({...prev, name: e.target.value}))} />
            </label>

              <label className={`input text-sm input-bordered ${signUpData.email_style} flex items-center gap-2`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
        
                <input type="text" className="grow" placeholder="Enter Email Address" value={signUpData.email} onChange={(e) => setSignUpData((prev) => ({...prev, email: e.target.value}))} />
                  </label>
                  <label className={`relative text-sm input input-bordered ${signUpData.password_style} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input type={hidePassword} className="grow" placeholder="Enter Password" value={signUpData.password} onChange={(e) => setSignUpData((prev) => ({...prev, password: e.target.value}))} />

              <div className="absolute right-5 cursor-pointer">
                { hidePassword === "password" ? <FaEye onClick={() => setHidePassword("text")} size={18} /> : <FaEyeSlash onClick={() => setHidePassword("password")} size={18} />  }
                
              </div>
            </label>

            <label className={`relative text-sm input input-bordered ${signUpData.confirm_style} flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input type={hideConfirmPassword} className="grow pr-[45px]" placeholder="Enter Confirm Password" value={signUpData.confirmpassword} onChange={(e) => setSignUpData((prev) => ({...prev, confirmpassword: e.target.value}))} />
              <div className="absolute right-5 cursor-pointer">
                { hideConfirmPassword === "password" ? <FaEye onClick={() => setHideConfirmPassword("text")} size={18} /> : <FaEyeSlash onClick={() => setHideConfirmPassword("password")} size={18} />  }
                
              </div>
            </label>
              
          <button className="btn" type="submit">Submit</button>
        <p className="text-sm mt-4">Already have an Account? <Link to={'/login'} className="decoration-blue-500 hover:underline font-semibold">Sign In</Link></p>

      </form>
      </div>
    </div>
  )
}

export default SignUp;