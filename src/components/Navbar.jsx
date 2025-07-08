import { NavLink, useLocation } from "react-router";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
export default function Navbar() {

    const [isOpen, setisOpen] = useState(false)

    const clicked = (e) => {
        e.preventDefault();
        setisOpen(!isOpen);
    }

    let location = useLocation()

    const navigate = useNavigate();
    const { handleLogout, currentUser } = useAuth();

    const Logout = () => {
        try {
            handleLogout();
            navigate("/login");
            console.log("Loggged out")
        } catch (error) {
            console.log(error);
            alert("NOt logged out");
        }
    }

    useEffect(() => {
        setisOpen(false);
    }, [location]);


    return (
        <>
            <nav className="flex flex-row justify-between px-4 md:px-2 py-4 md:py-0 md:justify-evenly text-center z-10 items-center-safe bg-orange-400 sticky top-0">
                <NavLink to="/home"><img src="https://storage.googleapis.com/campusconnect-iomp.firebasestorage.app/Website%20Images/logo.png" alt="Logo" className="w-12 sm:w-16 h-auto rounded-full" /></NavLink>
                {currentUser &&
                    <div className="hidden sm:p-4 md:block">
                        <ul className="flex flex-row items-center-safe list-none text-white">
                            <NavLink to="/home" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Home</NavLink>
                            <NavLink to="/problems" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Problems</NavLink>
                            <NavLink to="/official" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Announcements</NavLink>
                            <NavLink to="/lostandfound" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Lost & Found</NavLink>
                            <NavLink to="/aboutus" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>About Us</NavLink>
                        </ul>
                    </div>
                }
                {currentUser &&
                    <div className="hidden md:flex">
                        <div className="flex flex-col items-center">
                            <UserCircleIcon className="size-10" />
                            <p className="font-bold">Hello, {currentUser.displayName}!</p>
                        </div>
                        <button className="p-1 my-4 hover:bg-red-700 hover:text-white transition-colors ease-in duration-200 bg-white m-2 cursor-pointer text-red-700 rounded-md border-2 border-red" onClick={Logout}>Logout</button>
                    </div>
                }
                {!currentUser &&
                    <div className="hidden md:p-2 md:block item-center">
                        <ul className="flex flex-row items-center-safe list-none text-white bg-orange-400">
                            <Link to="/login" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Login</Link>
                            <Link to="/register" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Register</Link>
                        </ul>
                    </div>
                }
                {currentUser &&
                    <button onClick={clicked} className="block md:hidden cursor-pointer">
                        {!isOpen && <Bars3Icon className="fill-white size-8" />}
                        {isOpen && <XMarkIcon className="fill-white size-8" />}
                    </button>}
                {!currentUser && <div className="sticky top-16 z-10 md:hidden">
                    <ul className="flex flex-row items-center-safe list-none text-white bg-orange-400 md:hidden">
                        <Link to="/login" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Login</Link>
                        <Link to="/register" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Register</Link>
                    </ul>
                </div>
                }
            </nav>
            {isOpen &&
                currentUser && <div className="sticky top-16 z-10 md:hidden">
                    <ul className="flex flex-col items-center-safe list-none text-white bg-orange-400 md:hidden">
                        <NavLink to="/home" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Home</NavLink>
                        <NavLink to="/problems" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Problems</NavLink>
                        <NavLink to="/official" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Announcements</NavLink>
                        <NavLink to="/lostandfound" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Lost & Found</NavLink>
                        <NavLink to="/aboutus" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>About Us</NavLink>
                        <div className="flex flex-col items-center">
                            <p className="p-2 text-lg font-bold">Hello, {currentUser.displayName}!</p>
                            <button className="bg-white transition-colors ease-in duration-200 rounded-md p-1 border-2 border-black m-2 cursor-pointer text-red-700" onClick={Logout}>Logout</button>
                        </div>
                    </ul>
                </div>
            }


        </>
    )
}