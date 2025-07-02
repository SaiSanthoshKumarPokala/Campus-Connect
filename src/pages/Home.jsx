import { NavLink } from "react-router"
import Carousel from "../components/Carousel"
import Notices from "../components/Notices"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import ChatBot from "../components/Chatbot";


export default function Home() {
    return (
        <>
            <title>Home</title>
            <img src="src/assets/images/bg.jpeg" alt="" className="fixed h-dvh w-[2000px] object-cover md:object-fill md:w-dvw md:h-auto opacity-50 blur-xs" />
            <div className="min-h-dvh relative flex flex-col items-center gap-4">
                <div className="border-2 border-orange-500 p-2 mt-2 w-9/12 rounded-md bg-black overflow-hidden transition-all">
                    <p className="font-bold text-orange-400 text-sm md:text-xl text-shadow-[0_0px_10px_rgb(233, 213, 255)] animate-[slide_10s_linear_infinite_running] md:animate-[slide_15s_linear_infinite_running] hover:animate-[slide_15s_linear_infinite_paused] ">Do you agree with this? <NavLink to="/problems" className="underline underline-offset-2">But What?</NavLink></p>
                </div>
                <div className="mb-8 m-6 p-2">
                    <p className="text-center font-bold text-white text-4xl md:text-5xl">Welcome to Campus Connect!</p>
                    <p className="text-center my-2 m-auto font-semibold text-white text-2xl md:w-6/12 w-10/12">One stop solution for your College related Problems, Lost and Found items, Official College notifications and announcements related to Clubs</p>
                </div>
                {/* <div className="m-auto my-2 w-52 h-52 border-2 border-amber-300 text-center content-center"></div> */}
                {/* <Carousel/> */}
                <section className="flex flex-col items-center gap-6">
                    <p className="font-serif md:text-4xl text-3xl text-orange-500 font-bold text-center">Upcoming events</p>
                    <div className="flex flex-row items-center justify-center flex-wrap">
                        <Notices />
                        <Notices />
                    </div>
                </section>
                <section className="flex flex-col items-center gap-6">
                    <p className="font-serif md:text-4xl text-3xl text-orange-500 font-bold text-center">Past events</p>
                    <div className="flex flex-row items-center justify-center flex-wrap">
                        <Notices />
                        <Notices />
                    </div>
                </section>

                <div className="my-4 py-4 px-0 w-11/12 md:w-10/12 rounded-md bg-white/30 backdrop-blur-lg text-black">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
                        Latest Official Notifications
                    </h1>
                    <table className="w-11/12 m-auto mt-2 border-4 border-white table-fixed border-separate">
                        <thead>
                            <tr className="bg-orange-400">
                                <th className="border-2 p-2 border-white w-5/12 md:w-2/12 text-center">Date</th>
                                <th className="border-2 p-2 border-white w-10/12">Notification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-orange-300 odd:bg-white">
                                <td className="border-2 py-2 md:p-2 border-white text-center">21-Dec-2024</td>
                                <td className="border-2 p-2 border-white">Official Notification. Will the date  and content get aligned to center?</td>
                            </tr>
                            <tr className="even:bg-orange-300 odd:bg-white">
                                <td className="border-2 py-2 md:p-2 border-white text-center">21-Dec-2024</td>
                                <td className="border-2 p-2 border-white">Official Notification. Yes they are aligned to center.</td>
                            </tr>
                            <tr className="even:bg-orange-300 odd:bg-white">
                                <td className="border-2 py-2 md:p-2 border-white text-center">21-Dec-2024</td>
                                <td className="border-2 p-2 border-white">Official Notification</td>
                            </tr>
                            <tr className="even:bg-orange-300 odd:bg-white">
                                <td className="border-2 py-2 md:p-2 border-white text-center">21-Dec-2024</td>
                                <td className="border-2 p-2 border-white">Official Notification</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ChatBot />
            </div>
        </>
    )
};