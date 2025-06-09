import { NavLink } from "react-router"
import Carousel from "../components/Carousel"
import Notices from "../components/Notices"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import ChatBot from "../components/chatbot";


export default function Home() {
    return (
        <>
            <title>Home</title>
            <div className="min-h-dvh flex flex-col items-center gap-4">
                <div className="border-2 border-orange-500 p-2 mt-2 w-9/12 rounded-md bg-white overflow-hidden transition-all">
                    <p className="font-bold text-orange-400 text-sm md:text-xl text-shadow-[0_0px_10px_rgb(233, 213, 255)] animate-[slide_10s_linear_infinite_running] md:animate-[slide_15s_linear_infinite_running] hover:animate-[slide_15s_linear_infinite_paused] ">Do you agree with this? <NavLink to="/problems" className="underline underline-offset-2">But What?</NavLink></p>
                </div>
                {/* <div className="m-auto my-2 w-52 h-52 border-2 border-amber-300 text-center content-center"></div> */}
                {/* <Carousel/> */}
                <section className="flex flex-col items-center gap-6">
                    <p className="font-serif text-3xl text-slate-100 font-bold text-center">Upcoming events</p>
                    <Notices />
                    <Notices />
                    <Notices />
                </section>
                <section className="flex flex-col items-center gap-6">
                    <p className="font-serif text-3xl text-slate-100 font-bold text-center mt-2">Past events</p>
                    <Notices />
                    <Notices />
                    <Notices />
                </section>
                <div className="my-4 p-4 w-10/12 border-2 border-slate-200 rounded-md bg-slate-800 text-slate-100">
                    <h1 className="text-2xl font-bold text-center mb-2">
                        Latest Official Notifications
                    </h1>
                    <div className="flex flex-row items-center p-2 border-1 border-slate-100 rounded-t-md">
                        <ArrowRightIcon className="size-6" />
                        <p className="ml-4">Welcome to this website</p>
                    </div>
                    <div className="flex flex-row items-center p-2 border-1 border-slate-100">
                        <ArrowRightIcon className="size-6" />
                        <p className="ml-4">Welcome to this website</p>
                    </div>
                    <div className="flex flex-row items-center p-2 border-1 border-slate-100">
                        <ArrowRightIcon className="size-6" />
                        <p className="ml-4">Welcome to this website</p>
                    </div>
                    <div className="flex flex-row items-center p-2 border-1 border-slate-100 rounded-b-md">
                        <ArrowRightIcon className="size-6" />
                        <p className="ml-4">Welcome to this website</p>
                    </div>
                </div>
                <ChatBot />
            </div>
        </>
    )
};