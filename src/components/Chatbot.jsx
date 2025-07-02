import { useState } from "react";
import { PaperAirplaneIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { v4 as uuid } from "uuid";
import Bot from "/public/Bot.jpg";

export default function ChatBot() {

    const [isopen, setisOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [queries, setQueries] = useState([]);
    const [answers, setAnswers] = useState([{ answer: "Yes" }]);
    const QA = [["Is the college good?", "Yes, it is very good."], ["Do clubs function well?", "Yeah, there are many clubs that function so good."]];
    // const Ans = ["Yes, it is very good.","Yeah, there are many clubs that function so good."];

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const Ask = () => {
        setQueries([...queries, { id: uuid(), query: query }]);
        console.log(queries);
        setQuery("");
        console.log("Hello");
    }


    return (
        <>
            <div className="sticky bottom-20 lg:bottom-10 ml-[75vw] lg:ml-[90vw] z-50">
                {
                    isopen &&
                    <div className="chat w-72 h-96 -left-60 absolute bottom-16 animate-[appear_0.5s_linear]">
                        <div className="sticky p-2 top-0 flex flex-row items-center justify-between bg-white rounded-t-xl">
                            <img
                                src={Bot}
                                alt="Chatbot"
                                className="rounded-full brightness-150 size-10"
                            />
                            <div>Chatbot</div>
                            <button type="button" className="cursor-pointer" onClick={()=>{setisOpen(false)}}>
                                <XCircleIcon className="size-8 cursor-pointer hover:rotate-90 transition-all ease-in duration-200 hover:scale-105 hover:fill-red-500 hover:stroke-white" />
                            </button>
                        </div>
                        <div className="overflow-y-scroll h-70 bg-neutral-300">
                            {
                                QA.map(item => {
                                    return (
                                        <>
                                            <div className="flex flex-row items-center">
                                                <UserCircleIcon className="size-6" />
                                                <div className="bg-white rounded-md w-10/12 m-1 p-2">
                                                    {item[0]}
                                                </div>
                                            </div>
                                            <div className="flex flex-row-reverse items-center">
                                                <img
                                                    src={Bot}
                                                    alt="Chatbot"
                                                    className="rounded-full brightness-150 size-6"
                                                />
                                                <div className="bg-white rounded-md w-10/12 m-1 p-2">
                                                    {item[1]}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            {/* {queries.map(item => {
                                return (
                                    <div className="bg-white rounded-md w-10/12 m-2 p-2">
                                        {item.query}
                                    </div>
                                )
                            })} */}
                            {/* {answers.map(item => {
                                return (
                                    <div className="bg-white rounded-md w-10/12  m-2 p-2">
                                        {item.answer}
                                    </div>
                                )
                            })} */}
                        </div>
                        <div className="sticky bottom-0 text-center flex flex-row items-center justify-center gap-2 rounded-b-xl bg-white p-2">
                            <textarea name="Userquery" placeholder="Ask it" id="Userquery" value={query} className="p-2 text-xl focus:outline-2 focus:bg-white focus:outline-orange-400 resize-none field-sizing-content rounded-md border-2 border-amber-300 max-h-20 min-w-8/12" onChange={handleChange}></textarea>
                            <button type="submit" onClick={Ask}>
                                <PaperAirplaneIcon className="cursor-pointer fill-white outline-black size-8 hover:fill-blue-400" />
                            </button>
                        </div>
                    </div>
                }
                {!isopen &&
                    <button className="bg-black rounded-full w-14 h-14 flex items-center justify-center shadow-[0_0_10px_8px_rgba(255,255,255,0.5)] cursor-pointer animate-bounce transition-all duration-500" onClick={()=>{setisOpen(true)}}>
                        <img
                            src={Bot}
                            alt="Chatbot"
                            className="object-contain rounded-full brightness-150"
                        />
                    </button>
                }

            </div>
        </>
    )
}