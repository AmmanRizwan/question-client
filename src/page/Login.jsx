import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

  const { loginData, setLoginData, loginSubmit } = useContext(DataContext);
    const [hidePassword, setHidePassword] = useState("password");

  useEffect(() => {
    if (loginData.password === "") {
      setLoginData((prev) => ({...prev, password_style: ""}));
    }
    else if (loginData.password.length < 5) {
      setLoginData((prev) => ({...prev, password_style: "input-error"}));
    }
    else if (loginData.password.length >= 10) {
      setLoginData((prev) => ({...prev, password_style: "input-success"}));
    }
    
    if (loginData.email === "") {
      setLoginData((prev) => ({...prev, email_style: ""}));
    }
    else if (loginData.email.slice(-4) !== ".com" || loginData.email.search("@") === -1) {
      setLoginData((prev) => ({...prev, email_style: "input-error"}));
    }
    else if (loginData.email.slice(-4) === ".com" && loginData.email.search("@") !== -1) {
      setLoginData((prev) => ({...prev, email_style: "input-success"}));
    }
  }, [loginData.email, loginData.password]);

  return (
    <div className="min-h-screen flex justify-center items-center select-none">
      <div className="w-full sm:w-[450px] bg-black sm:px-8 py-10 sm:rounded-md">
          <h1 className="text-2xl sm:text-4xl font-bold md:font-semibold mb-10 ml-10 sm:ml-0">Sign In</h1>

        <form onSubmit={loginSubmit} className={`flex text-xl flex-col justify-center gap-4 my-4 px-12`}>
              <label className={`input text-sm ${loginData.email_style} input-bordered flex items-center gap-2`}>
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
        
        <input type={"text"} className="grow" placeholder="Enter Email Address" value={loginData.email} onChange={(e) => setLoginData((prev) => ({...prev, email:e.target.value}))} />
        
          </label>
            <label className={`relative text-sm input input-bordered ${loginData.password_style} flex items-center gap-2`}>
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
              <input type={hidePassword} className="grow" placeholder="Enter Password" value={loginData.password} onChange={(e) => setLoginData((prev) => ({...prev, password:e.target.value}))} onKeyPress={(e) => e.key === "Enter" && loginSubmit()}/>

              <div className="absolute right-5 cursor-pointer">
                { hidePassword === "password" ? <FaEye onClick={() => setHidePassword("text")} size={18} /> : <FaEyeSlash onClick={() => setHidePassword("password")} size={18} />  }
                
              </div>

            </label>

            <button type="submit" className="btn">Submit</button>

            <p className="text-sm mt-4">Do not have an account? <Link to={'/signup'} className="decoration-blue-500 hover:underline font-semibold">Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login;