import { useEffect, useState, Useref, useRef } from "react";
import Posts from "../components/Post";
import { PaperAirplaneIcon, FunnelIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from 'uuid';
import { UserCircleIcon, HandThumbUpIcon, HandThumbDownIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"



export default function Problems() {


    const verref = useRef(null);

    const [rollno, setrollno] = useState("");
    const [problems, setproblems] = useState([]);
    const [category, setCategory] = useState("Hostel")
    const [problem, setproblem] = useState("");
    const [likeActive, setlikeActive] = useState(false);
    const [dislikeActive, setdislikeActive] = useState(false);
    const [reactions, setReactions] = useState([]);
    const [likes, setlikes] = useState(0);
    const [dislikes, setdislikes] = useState(0);

    useEffect(() => {
        let savedProblems = localStorage.getItem("Problems");
        if (savedProblems) {
            let probs = JSON.parse(savedProblems);
            setproblems(probs)
        }
    }, [])


    const saveToLS = () => {
        localStorage.setItem("Problems", JSON.stringify(problems));
    }

    useEffect(() => {
        saveToLS();
    }, [problems])


    // localStorage.clear();

    const Inputvalue = (e) => {
        setproblem(e.target.value);
    }

    const Post = () => {
        // verref.current.showModal()
        setproblems([...problems, { id: uuidv4(), problem: problem, category: category, likes: likes, dislikes: dislikes }]);
        setproblem("");
        console.log(problems)
    }

    const selectValue = (e) => {
        setCategory(e.target.value)
    }

    // const VerificationSuccess = () => {
    //     setproblems([...problems, { id: uuidv4(), problem: problem, category: category, likes: likes, dislikes: dislikes }]);
    //     setproblem("");
    //     console.log(problems)
    //     saveToLS();
    //     verref.current.close()
    // }



    const ToggleLike = (e, id) => {
        let index = problems.findIndex((item) => item.id === id);
        console.log(problems[index]);
        if (likeActive) {
            setlikeActive(false);
            likes > 0 ? setlikes(likes - 1) : setlikes(0);
        }
        else {
            setdislikeActive(false);
            setlikeActive(true);
            setlikes(likes + 1);
            dislikes > 0 ? setdislikes(dislikes - 1) : setdislikes(0);
        }
    }

    const ToggleDisLike = (e, id) => {
        let index = problems.findIndex((item) => item.id === id);
        console.log(problems[index]);
        if (dislikeActive) {
            setdislikeActive(false);
            problems[index].dislikes > 0 ? setdislikes(problems[index].dislikes - 1) : setdislikes(0);
        }
        else {
            setlikeActive(false);
            setdislikeActive(true);
            problems[index].likes > 0 ? setlikes(problems[index].likes - 1) : setlikes(0);
            setdislikes(problems[index].dislikes + 1);
        }
    }

    // localStorage.clear();

    return (
        <>
            <title>Problems</title>
            <div className="min-h-dvh">
                <div className="lg:grid lg:grid-cols-[400px_minmax(600px,_1fr)]">
                    <div>
                        <div className="lg:p-4 md:mx-20 mt-4 mx-12 sticky top-22 flex flex-col items-center justify-start gap-4 rounded-xl border-2 border-slate-300 bg-orange-400 inset-shadow-sm inset-shadow-white">
                            <div className="text-center font-bold flex flex-row items-center justify-center text-2xl">
                                Categories
                            </div>
                            <form className="grid grid-cols-1 gap-4 text-xl">
                                <div>
                                    <input type="checkbox" name="Administration" value="Administration" id="Administration" />
                                    <label htmlFor="Administration">Administration</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Library" value="Library" id="Library" />
                                    <label htmlFor="Library">Library</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Hostel" value="Hostel" id="Hostel" />
                                    <label htmlFor="Hostel">Hostel</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="Department" value="Department" id="Department" />
                                    <label htmlFor="Department">Department</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 items-center justify-items-center my-4 lg:mx-10 lg:my-6">
                        {problems.map(items => {
                            return (
                                <div key={items.id} className="w-80 sm:w-9/12 h-auto border-2 border-slate-400 rounded-2xl shadow-xl sticky top-20 bg-slate-100">
                                    {/* <div className="flex flex-row items-center gap-2 border-b-2 border-slate-400">
                                        <UserCircleIcon className="size-12 fill-slate-600" />
                                        <p className="text-xl">Anonymous</p>
                                    </div>
                                    <div className="text-left place-content-center min-h-40 p-4 whitespace-pre-line">
                                        {items.problem}
                                    </div>
                                    <div className="reactions flex flex-row gap-6 sm:gap-10 items-center justify-center m-auto border-t-2 border-slate-300">
                                        <div className="flex flex-row items-center gap-1">
                                            <button className="cursor-pointer" onClick={(e) => ToggleLike(e, items.id)} >
                                                <HandThumbUpIcon className={`size-6 sm:size-8 ${likeActive ? "fill-green-600 stroke-green-600" : "fill-none stroke-black"}`} />
                                            </button>
                                            <b>{items.likes}</b>
                                        </div>
                                        <div className="flex flex-row items-center gap-1">
                                            <button className="cursor-pointer">
                                                <ChatBubbleLeftEllipsisIcon className="fill-white stroke-black size-6 sm:size-8" />
                                            </button>
                                            <b>Comment</b>
                                        </div>
                                        <div className="flex flex-row gap-1">
                                            <button className="cursor-pointer" onClick={(e) => ToggleDisLike(e, items.id)}>
                                                <HandThumbDownIcon className={`size-6 sm:size-8 ${dislikeActive ? "fill-red-600 stroke-red-600" : "fill-none stroke-black"}`} />
                                            </button>
                                            <b>{items.dislikes}</b>
                                        </div>
                                    </div> */}
                                    <Posts Content={items.problem} id={items.id}/>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <div className="bg-orange-400 sticky py-4 bottom-0 md:bottom-0 z-10">
                <form className="flex flex-col gap-2 m-2 md:flex-row items-center justify-center">
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <label htmlFor="Category" className="text-xl">Category:</label>
                        <select name="Category" required id="Category" value={category} onChange={selectValue} className="border-2 p-2 border-amber-300 rounded-md text-xl cursor-pointer focus:outline-2 focus:bg-white focus:outline-orange-400">
                            <option value="Administration">Administration</option>
                            <option value="Library">Library</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Department">Department</option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-2 m-2 items-center justify-center min-w-8/12 max-w-10/12 max-h-20 md:max-w-9/12">
                        <label htmlFor="ID" className="text-xl">Problem: </label>
                        <textarea name="Userinput" autoFocus required placeholder="Describe it" id="ID" value={problem} className="p-2 text-xl focus:outline-2 focus:bg-white focus:outline-orange-400 resize-none field-sizing-content rounded-md border-2 border-amber-300 max-h-20 min-w-8/12" onChange={Inputvalue}></textarea>
                        <button type="submit" formAction={Post}>
                            <PaperAirplaneIcon className="cursor-pointer fill-white outline-black size-8 hover:fill-blue-600" />
                        </button>
                    </div>
                </form>
            </div>
            <dialog ref={verref} className="p-4 rounded-md bg-orange-300 m-auto backdrop:bg-cyan-300/50 w-8/12 md:6/12 lg:w-4/12">
                <div className="flex flex-row items-center justify-end mb-4 gap-1">
                    <p>Close</p>
                    <button type="button" className="cursor-pointer" onClick={() => { verref.current.close() }}>
                        <XCircleIcon className="size-8 hover:rotate-90 transition-transform hover:stroke-red-500 duration-500" />
                    </button>
                </div>
                <div className="flex flex-row items-center gap-2 md:gap-4">
                    <label htmlFor="RollNumber">Roll Number:</label>
                    <input type="text" id="RollNumber" readOnly placeholder="Roll Number" value={rollno} className="border-2 p-2 rounded-md w-6/12 border-white cursor-not-allowed" />
                </div>
                <p>
                    <b>Note: </b>We use your roll number just to verify that you are this college student. We don't save it.
                </p>
                <button type="submit" className="flex justify-center border-2 rounded-xl border-white m-auto hover:border-2 hover:border-black hover:bg-white p-2 hover:cursor-pointer" onClick={Post}>
                    Submit
                </button>
            </dialog>
        </>

    )
}; 
