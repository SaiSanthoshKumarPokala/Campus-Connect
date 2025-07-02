import ChatBot from "../components/Chatbot"
import Poster from "/public/Poster.png";

export default function Official() {
    return (
        <>
            <div className="min-h-dvh">

                <h1 className="text-3xl md:text-4xl text-center font-bold text-white m-2 font-serif mt-4">Official Notifications</h1>
                <table className="w-11/12 lg:w-10/12 m-auto mt-2 border-4 border-white table-fixed border-separate">
                    <thead>
                        <tr className="bg-orange-400">
                            <th className="border-2 p-2 border-white w-5/12 md:w-2/12 text-center">Date</th>
                            <th className="border-2 p-2 border-white w-10/12">Notification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-orange-300 odd:bg-white">
                            <td className="border-2 p-2 border-white text-center">21-Dec-2024</td>
                            <td className="border-2 p-2 border-white">Official Notification. Will the date  and content get aligned to center?</td>
                        </tr>
                        <tr className="even:bg-orange-300 odd:bg-white">
                            <td className="border-2 p-2 border-white text-center">21-Dec-2024</td>
                            <td className="border-2 p-2 border-white">Official Notification. Yes they are aligned to center.</td>
                        </tr>
                        <tr className="even:bg-orange-300 odd:bg-white">
                            <td className="border-2 p-2 border-white text-center">21-Dec-2024</td>
                            <td className="border-2 p-2 border-white">Official Notification</td>
                        </tr>
                        <tr className="even:bg-orange-300 odd:bg-white">
                            <td className="border-2 p-2 border-white text-center">21-Dec-2024</td>
                            <td className="border-2 p-2 border-white">Official Notification</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="md:text-4xl text-3xl text-center font-bold text-white m-2 mask-alpha font-serif mt-6">Upcoming Club Events</h1>
                <div className="overflow-hidden whitespace-nowrap flex gap-10">
                    <div className="py-6 shrink-0 animate-[scroll-x_10s_linear_infinite_running_alternate] md:animate-[scroll-x_15s_linear_infinite_running_alternate] hover:animate-[scroll-x_15s_linear_infinite_paused_alternate] flex gap-10 before:bg-amber-400">
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                    </div>
                </div>
                <h1 className="md:text-4xl text-3xl text-center font-bold text-white m-2 mask-alpha font-serif">Previous Club Events</h1>
                <div className="overflow-hidden whitespace-nowrap group flex ">
                    <div className="py-6 shrink-0 group-hover:animate-[scroll-x_10s_linear_infinite_paused] animate-[scroll-x_10s_linear_infinite_running] flex gap-10 before:bg-amber-400 overflow-visible">
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                    </div>
                    <div className="py-6 shrink-0 group-hover:animate-[scroll-x_10s_linear_infinite_paused] animate-[scroll-x_10s_linear_infinite_running] flex gap-10 before:bg-amber-400 overflow-visible">
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                        <a href="https://www.instagram.com/p/DHv1aC-B3HV/?igsh=ajFuajF5NG1ubmJo" target="_blank"><img src={Poster} alt="" className="cursor-pointer h-60 md:h-70 lg:h-80 place-self-center-safe hover:scale-110 border-2 border-white" /></a>
                    </div>
                </div>
            </div>
            <ChatBot />
        </>
    )
}