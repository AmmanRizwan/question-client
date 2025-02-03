import React from "react";
import { Link } from "react-router-dom";
import python_logo from "../images/icon.png"
import sql_logo from '../images/icon2.png'

const SelectLang = () => {
    return (
        <div className="min-h-screen flex justify-center items-center gap-4">
           
           <Link to={'/python'}>
                <button className="font-semibold bg-slate-900 p-3 rounded-lg">
                    <img src={python_logo} alt="Python" className="w-[150px] md:w-[200px]"  />
                    Python
                </button>
           </Link>
           
           <Link to={'/sql'}>
                <button className="font-semibold bg-slate-900 p-3 rounded-lg">
                    <img src={sql_logo} alt="Python" className="w-[150px] md:w-[200px]"  />
                    SQL
                </button>
           </Link>

        </div>
    )
}

export default SelectLang;