import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { BASE_GLOBAL_URL } from "../data/jsonData";

const Profile = () => {
    
    const [profile, setProfile] = useState({name: "", email: ""});

    const getProfile = async () => {
        try {
            const response = await fetch(`${BASE_GLOBAL_URL}users/profile`, {
                credentials: "include",
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });

            const data = await response.json();
            setProfile(data);
        }
        catch(err) {
            console.log(err.message);
        }
    }

    const { LogoutUser } = useContext(DataContext);

    useEffect(() => {
        getProfile();
    }, [profile]);

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="w-full sm:w-[450px] bg-indigo-800 sm:px-8 py-10 sm:rounded-md flex justify-center items-center flex-col gap-4">
            <h1 className="text-2xl sm:text-4xl font-bold md:font-semibold flex items-center justify-center mb-5">User Profile</h1>
            <div className="avatar online placeholder">
                <div className="bg-indigo-300 bg-neutral text-neutral-content w-24 rounded-full">
                    <span className="capitalize text-3xl text-black">{profile.name.slice(0, 1)}</span>
                </div>
            </div>

            <div className="flex justify-center gap-4 flex-col text-base md:text-xl">
            <h1>
                Name: {profile.name}
            </h1>

            <h1>
                Email: {profile.email}
            </h1>

            </div>

            <div>
                <button className="btn bg-indigo-300 border-none hover:bg-indigo-400 text-black" onClick={() => LogoutUser()}>Logout</button>
            </div>

          </div>
      </div>
    )
}

export default Profile;