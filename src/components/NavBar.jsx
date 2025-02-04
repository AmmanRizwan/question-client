import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  
  const isAuth = localStorage.getItem('userAuth');

  return (
      <div className="navbar bg-base-100">
        {
          !isAuth ? 
          <></>
          :
          <>
          <div className="navbar-start">
              <Link to={'/user'} className="ml-4">
                <button className="btn text-[12px] sm:text-base">
                  All Data
                </button>
              </Link>
          </div>
          
          <div className="navbar-center">
          <Link to={"/language"}>
            <div className="text-[16px] flex gap-3 sm:text-xl font-semibold">Code Tutorial</div>
          </Link>
          </div>
          <div className="navbar-end">

          <ul className="text-sm sm:text-base md:hidden menu menu-horizontal mr-3 z-[100]">
                  <li>
                    <details>
                      <summary className="text-[12px] sm:text-base">Menu</summary>
                      <ul className="p-2">
                        <li><Link to={'/senddata'}>Send Data</Link></li>
                        <li><Link to={'/profile'}>My Profile</Link></li>
                      </ul>
                    </details>
                  </li>
          </ul>

          <div className="flex mr-4 hidden gap-3 md:flex">
            <Link to={'/senddata'} className="btn">Send Data</Link>
            <Link to={'/profile'} className="btn">My Profile</Link>
          </div>

          </div>
          </>
        }
        </div>
  )
}

export default NavBar;