import { NavLink, useLocation } from "react-router";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
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
            <nav className="flex flex-row justify-evenly px-4 sm:px-0 py-2 md:py-0 sm:justify-evenly z-10 items-center-safe bg-orange-400 sticky top-0">
                <NavLink to="/home"><img src="src\assets\images\logo.png" alt="Logo" className="w-12 sm:w-16 h-auto rounded-full" /></NavLink>
                {currentUser &&
                    <div className="hidden sm:p-4 sm:block ">
                        <ul className="flex flex-row items-center-safe list-none text-white">
                            <NavLink to="/home" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Home</NavLink>
                            <NavLink to="/problems" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Problems</NavLink>
                            <NavLink to="/official" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Announcements</NavLink>
                            <NavLink to="/lostandfound" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>Lost and Found</NavLink>
                            <NavLink to="/aboutus" className={({ isActive }) => `mx-2 hover:text-black ${isActive ? "underline underline-offset-4" : "p-2 hover:underline hover:underline-offset-4"}`}>About Us</NavLink>
                            <button className="bg-green-300 rounded-xl p-2 border-2 border-white m-2 cursor-pointer text-red-700 active:outline-2 outline-amber-700" onClick={Logout}>Logout</button>
                        </ul>
                    </div>
                }
                {!currentUser &&
                    <div className="hidden sm:p-4 sm:block item-center">
                        <ul className="flex flex-row items-center-safe list-none text-white bg-orange-400">
                            <Link to="/login" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Login</Link>
                            <Link to="/register" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Register</Link>
                        </ul>
                    </div>
                }
                {currentUser &&
                    <button onClick={clicked} className="block sm:hidden cursor-pointer">
                        {!isOpen && <Bars3Icon className="fill-white size-8" />}
                        {isOpen && <XMarkIcon className="fill-white size-8" />}
                    </button>}
                {!currentUser && <div className="sticky top-16 z-10 sm:hidden">
                    <ul className="flex flex-row items-center-safe list-none text-white bg-orange-400 sm:hidden">
                        <Link to="/login" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Login</Link>
                        <Link to="/register" className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Register</Link>
                    </ul>
                </div>
                }
            </nav>
            {isOpen &&
                currentUser && <div className="sticky top-16 z-10 sm:hidden">
                    <ul className="flex flex-col items-center-safe list-none text-white bg-orange-400 sm:hidden">
                        <NavLink to="/home" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Home</NavLink>
                        <NavLink to="/problems" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Problems</NavLink>
                        <NavLink to="/official" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Announcements</NavLink>
                        <NavLink to="/lostandfound" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>Lost and Found</NavLink>
                        <NavLink to="/aboutus" className={({ isActive }) => `my-2 hover:text-black ${isActive ? "underline underline-offset-4" : ""}`}>About Us</NavLink>
                        <button className="bg-green-300 rounded-xl p-2 border-2 border-white m-2 cursor-pointer text-red-700 active:outline-2 outline-amber-700" onClick={Logout}>Logout</button>
                    </ul>
                </div>
            }


        </>
    )
}