import { NavLink, useLocation } from "react-router";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";

export default function Navbar() {
    
    const [isOpen, setisOpen] = useState(false)
    
    const clicked = (e) => {
        e.preventDefault();
        setisOpen(!isOpen);
        // console.log(isOpen);
    }


    let location = useLocation()

    useEffect(() => {
      setisOpen(false);
    }, [location]);


    return (
        <>
            <nav className="flex flex-row justify-between px-4 sm:px-0 py-2 md:py-0 sm:justify-evenly z-10 items-center-safe bg-orange-400 sticky top-0">
            <NavLink to="/home"><img src="src\assets\images\logo.png" alt="Logo" className="w-12 sm:w-16 h-auto rounded-full" /></NavLink>
                <div className="hidden sm:p-4 sm:block ">
                    <ul className="flex flex-row items-center-safe list-none text-white">
                        <NavLink to="/home" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "border-2 rounded-xl hover:bg-white border-white p-2"}`}>Home</NavLink>
                        <NavLink to="/problems" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "border-2 rounded-xl  hover:bg-white border-white p-2"}`}>Problems</NavLink>
                        {/* <NavLink to="/clubs" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "border-2 rounded-xl  hover:bg-white border-white p-2"}`}>Clubs</NavLink> */}
                        <NavLink to="/official" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "border-2 rounded-xl  hover:bg-white border-white p-2"}`}>Official Notifications</NavLink>
                        <NavLink to="/lostandfound" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "border-2 rounded-xl  hover:bg-white border-white p-2"}`}>Lost and Found</NavLink>
                        <NavLink to="/aboutus" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "border-2 rounded-xl border-white  hover:bg-white p-2"}`}>About Us</NavLink>
                    </ul>
                </div>
                <button onClick={clicked} className="block sm:hidden cursor-pointer">
                    {/* <Bars3Icon className="fill-white size-8 sm:hidden cursor-pointer" /> */}
                    {!isOpen && <Bars3Icon className="fill-white size-8" />}
                    {isOpen && <XMarkIcon className="fill-white size-8" />}
                </button>
            </nav>
            {isOpen &&
                <div className="sticky top-16 z-10 sm:hidden">
                    <ul className="flex flex-col items-center-safe list-none text-white bg-orange-400 sm:hidden">
                        <NavLink to="/home" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Home</NavLink>
                        <NavLink to="/problems" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Problems</NavLink>
                        {/* <NavLink to="/clubs" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Clubs</NavLink> */}
                        <NavLink to="/official" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Official Notifications</NavLink>
                        <NavLink to="/lostandfound" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Lost and Found</NavLink>
                        <NavLink to="/aboutus" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>About Us</NavLink>
                    </ul>
                </div>
            }

        </>
    )
}