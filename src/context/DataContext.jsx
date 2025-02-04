import React, { createContext, useContext, useState } from "react";
import { BASE_GLOBAL_URL } from '../data/jsonData';

export const DataContext = createContext(null);

const DataContextProvider = (props) => {

  const [formData, setFormData] = useState({question: "", language: "", code: ""});
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_GLOBAL_URL}data`,
        {
          credentials: "include",
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        });
        const result = await res.json();
        setMessage(result.message);
        setFormData({question: "", code: "", language: ""});
        setPopUp(true);
        setLoading(false);
    }
    catch (err) {
      console.log("Error Posting Data", err);
    }
  }

    const [loginData, setLoginData] = useState({email: "", password: "", email_style: "", password_style: ""});
  
    const loginSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${BASE_GLOBAL_URL}users/auth`, {
          credentials: "include",
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ email: loginData.email, password: loginData.password })
        })
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('userAuth', JSON.stringify(data));
          setLoginData((prev) => ({...prev, email: "", password: ""}));
          window.location.replace('/');
        }
      }
      catch (err) {
        console.log(err.message);
      }
    }

    const [signUpData, setSignUpData] = useState({name: "", email: "", password: "", confirmpassword: "", confirm_style: "", name_style: "", email_style: "", password_style: ""});
  
    
    const signUpSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${BASE_GLOBAL_URL}users/`, {
          credentials: "include",
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            name: signUpData.name,
            email: signUpData.email,
            password: signUpData.password
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('userAuth', JSON.stringify(data));
          setSignUpData((prev) => ({...prev, name: "", email: "", password: "", confirmpassword: ""}));
          window.location.replace('/');
        }
        const data = await response.json();
        console.log(data.message);
      }
      catch (err) {
        console.log(err);
      }
    }

    const LogoutUser = async () => {
      try {
        const response = await fetch(`${BASE_GLOBAL_URL}users/logout`, {
          credentials: "include",
          method: "POST",
          headers: {"Content-Type":"application/json"},
        })

        if (response.ok) {
          const data = await response.json();
          localStorage.removeItem('userAuth');
          window.location.replace('/');
        }
      }
      catch (err) {
        console.log(err.message);
      }
    }
    
    const contextValue = {
    popUp, loading, message, formData,
    setFormData, setLoading, setPopUp,
    handleSubmit,
    loginData, setLoginData,
    loginSubmit,
    signUpData, setSignUpData,
    LogoutUser,
    signUpSubmit,
   }

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
)}

export default DataContextProvider;