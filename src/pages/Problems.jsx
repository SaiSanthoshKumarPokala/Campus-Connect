import { useEffect, useState, Useref, useRef } from "react";
import Posts from "../components/Post";
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from 'uuid';
import { UserCircleIcon, HandThumbUpIcon, HandThumbDownIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"
import { collection, updateDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../hooks/useAuth";


export default function Problems() {


    const verref = useRef(null);

    const [rollno, setRollno] = useState("");
    const [problems, setproblems] = useState([]);
    const [category, setCategory] = useState("Hostel")
    const [problem, setproblem] = useState("");
    const [likes, setlikes] = useState(0);
    const [dislikes, setdislikes] = useState(0);
    const { currentUser } = useAuth();
    const [liked, setLiked] = useState([]);
    const [disliked, setDisliked] = useState([]);
    const [LikeActive, setLikeActive] = useState(false);
    const [DislikeActive, setDislikeActive] = useState(false);


    const fetchData = async () => {
        const ProblemsSnapshot = await getDocs(collection(db, "Problems"));
        setproblems(ProblemsSnapshot.docs);
        console.log("Problems:", problems);
    }

    useEffect(() => {
        fetchData();
    }, []);


    // useEffect(() => {
    //     let savedProblems = localStorage.getItem("Problems");
    //     if (savedProblems) {
    //         let probs = JSON.parse(savedProblems);
    //         setproblems(probs)
    //     }
    // }, [])

    // const saveToLS = () => {
    //     localStorage.setItem("Problems", JSON.stringify(problems));
    // }

    // useEffect(() => {
    //     saveToLS();
    // }, [problems])
    // localStorage.clear();


    const Post = async () => {
        // verref.current.showModal()
        await setDoc(doc(db, `Problems`, uuidv4()), { Problem: problem, Category: category, Likes: likes, Dislikes: dislikes, Liked: liked, Disliked: disliked });
        // setproblems([...problems, { id: uuidv4(), problem: problem, category: category, likes: likes, dislikes: dislikes }]);
        setproblem("");
        console.log(problems)
    }


    // const VerificationSuccess = () => {
    //     setproblems([...problems, { id: uuidv4(), problem: problem, category: category, likes: likes, dislikes: dislikes }]);
    //     setproblem("");
    //     console.log(problems)
    //     saveToLS();
    //     verref.current.close()
    // }


    const ToggleLike = async (e, id) => {

        const ref = doc(db, `users/${currentUser.uid}/Reactions`, id);
        const docsnap = await getDoc(ref);

        let liked = docsnap.data().Liked;
        let disliked = docsnap.data().Disliked;

        const [likeActive, setlikeActive] = useState(false);
        const [dislikeActive, setdislikeActive] = useState(false);

        if (liked) {
            setlikeActive(true);
            setdislikeActive(false);
        }
        else if (disliked) {
            setdislikeActive(true);
            setlikeActive(false);
        }
        else {
            setdislikeActive(false);
            setlikeActive(false);
        }

        const Ref = doc(db, `Problems`, id);
        const docSnap = await getDoc(Ref);

        let LIKES = docSnap.data().Likes;
        let DISLIKES = docSnap.data().Dislikes;

        console.log(LIKES, DISLIKES);

        if (likeActive) {
            setlikeActive(false);
            LIKES > 0 ? await updateDoc(Ref, {
                Likes: LIKES - 1,
            }) : await updateDoc(Ref, {
                Likes: 0,
            });
            setLikeActive(false);
        }
        else {
            if (dislikeActive) {
                setdislikeActive(false);
                setlikeActive(true);
                await updateDoc(Ref, {
                    Likes: LIKES + 1,
                });
                DISLIKES > 0 ? await updateDoc(Ref, {
                    Disikes: DISLIKES - 1,
                }) : await updateDoc(Ref, {
                    Dislikes: 0,
                });
                setDislikeActive(false);
                setLikeActive(true);
            }
            else {
                setlikeActive(true);
                await updateDoc(Ref, {
                    Likes: LIKES + 1,
                });
                setLikeActive(true);
            }
        }
        fetchData();
    }

    const ToggleDisLike = async (e, id) => {

        // const Ref = doc(db, `users/${currentUser.uid}/Todos`, id);
        // const docSnap = await getDoc(Ref);

        // let value = docSnap.data().isCompleted;
        // await updateDoc(Ref, {
        //     isCompleted: !value,
        // });

        const ref = doc(db, `users/${currentUser.uid}/Reactions`, id);
        const docsnap = await getDoc(ref);

        let liked = docsnap.data().Liked;
        let disliked = docsnap.data().Disliked;


        const [likeActive, setlikeActive] = useState(false);
        const [dislikeActive, setdislikeActive] = useState(false);

        if (liked) {
            setlikeActive(true);
            setdislikeActive(false);
        }
        else if (disliked) {
            setdislikeActive(true);
            setlikeActive(false);
        }
        else {
            setdislikeActive(false);
            setlikeActive(false);
        }

        const Ref = doc(db, `Problems`, id);
        const docSnap = await getDoc(Ref);

        let LIKES = docSnap.data().Likes;
        let DISLIKES = docSnap.data().Dislikes;

        console.log(LIKES, DISLIKES);

        if (dislikeActive) {
            setdislikeActive(false);
            DISLIKES > 0 ? await updateDoc(Ref, {
                Disikes: DISLIKES - 1,
            }) : await updateDoc(Ref, {
                Dislikes: 0,
            });
            setDislikeActive(false)
        }
        else {
            if (likeActive) {
                setlikeActive(false);
                setdislikeActive(true);
                await updateDoc(Ref, {
                    Dislikes: DISLIKES + 1,
                });
                LIKES > 0 ? await updateDoc(Ref, {
                    Likes: LIKES - 1,
                }) : await updateDoc(Ref, {
                    Likes: 0,
                });
                setLikeActive(false)
                setDislikeActive(true)
            }
            else {
                setdislikeActive(true);
                await updateDoc(Ref, {
                    Dislikes: DISLIKES + 1,
                });
                setDislikeActive(true)
            }
        }
        fetchData();
    }


    return (
        <>
            <title>Problems</title>
            <div className="min-h-dvh">
                <div className="lg:grid lg:grid-cols-[400px_minmax(600px,_1fr)]">
                    <div className="w-full md:w-6/12 lg:w-full lg:sticky lg:top-22 mx-auto">
                        <div className="lg:p-4 md:mx-20 mt-4 mx-12 sticky top-22 flex flex-col items-center justify-start gap-4 rounded-xl border-2 border-slate-300 bg-orange-400 inset-shadow-sm inset-shadow-white">
                            <div className="text-center font-bold flex flex-row items-center justify-center text-2xl">
                                Categories
                            </div>
                            <form className="grid grid-cols-1 gap-4 text-xl">
                                <div className="flex items-center gap-2 accent-white focus:outline-2 outline-offset-2 outline-black">
                                    <input type="checkbox" name="Administration" className="size-6" value="Administration" id="Administration" />
                                    <label htmlFor="Administration">Administration</label>
                                </div>
                                <div className="flex items-center gap-2 accent-white focus:outline-2 outline-offset-2 outline-black">
                                    <input type="checkbox" name="Library" className="size-6" value="Library" id="Library" />
                                    <label htmlFor="Library">Library</label>
                                </div>
                                <div className="flex items-center gap-2 accent-white focus:outline-2 outline-offset-2 outline-black">
                                    <input type="checkbox" name="Hostel" className="size-6" value="Hostel" id="Hostel" />
                                    <label htmlFor="Hostel">Hostel</label>
                                </div>
                                <div className="flex items-center gap-2 accent-white focus:outline-2 outline-offset-2 outline-black">
                                    <input type="checkbox" name="Department" className="size-6" value="Department" id="Department" />
                                    <label htmlFor="Department">Department</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 items-center justify-items-center my-4 lg:mx-10 lg:my-6">
                        {problems.map((doc) => {
                            return (
                                // <div key={doc.id} className="w-80 sm:w-9/12 h-auto border-2 border-slate-400 rounded-2xl shadow-xl sticky top-20 bg-slate-100">
                                //     <div className="flex flex-row items-center gap-2 border-b-2 border-slate-400">
                                //         <UserCircleIcon className="size-12 fill-slate-600" />
                                //         <p className="text-xl">Anonymous</p>
                                //     </div>
                                //     <div className="text-left place-content-center min-h-40 p-4 whitespace-pre-line">
                                //         {doc.data().Problem}
                                //     </div>
                                //     <div className="reactions flex flex-row gap-6 sm:gap-10 items-center justify-center m-auto border-t-2 border-slate-300">
                                //         <div className="flex flex-row items-center gap-1">
                                //             <button className="cursor-pointer" onClick={(e) => ToggleLike(e, doc.id)} >
                                //                 <HandThumbUpIcon className={`size-6 sm:size-8 ${LikeActive ? "fill-green-600 stroke-green-600" : "fill-none stroke-black"}`} />
                                //             </button>
                                //             <b>{doc.data().Likes}</b>
                                //         </div>
                                //         <div className="flex flex-row items-center gap-1">
                                //             <button className="cursor-pointer">
                                //                 <ChatBubbleLeftEllipsisIcon className="fill-white stroke-black size-6 sm:size-8" />
                                //             </button>
                                //             <b>Comment</b>
                                //         </div>
                                //         <div className="flex flex-row gap-1">
                                //             <button className="cursor-pointer" onClick={(e) => ToggleDisLike(e, doc.id)}>
                                //                 <HandThumbDownIcon className={`size-6 sm:size-8 ${DislikeActive ? "fill-red-600 stroke-red-600" : "fill-none stroke-black"}`} />
                                //             </button>
                                //             <b>{doc.data().Dislikes}</b>
                                //         </div>
                                //     </div>
                                // </div>
                                <Posts key={doc.id} Content={doc.data().Problem} id={doc.id} likes={doc.data().Likes} dislikes={doc.data().Dislikes} category={doc.data().Category} liked={doc.data().Liked} disliked={doc.data().Disliked} />
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
                        <select name="Category" required id="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="border-2 p-2 border-amber-300 rounded-md text-xl cursor-pointer focus:outline-3 outline-offset-3 focus:bg-white outline-white">
                            <option value="Administration">Administration</option>
                            <option value="Library">Library</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Department">Department</option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-2 m-2 items-center justify-center min-w-8/12 max-w-10/12 max-h-20 md:max-w-9/12">
                        <label htmlFor="ID" className="text-xl">Problem: </label>
                        <textarea name="Userinput" autoFocus required placeholder="Describe it" id="ID" value={problem} className="p-2 text-xl focus:outline-3 outline-offset-3 focus:bg-white outline-white resize-none field-sizing-content rounded-md border-2 border-amber-300 max-h-20 min-w-8/12" onChange={(e) => setproblem(e.target.value)}></textarea>
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
                    <input type="text" id="RollNumber" placeholder="Roll Number" value={rollno} className="border-2 p-2 rounded-md w-6/12 border-white cursor-not-allowed" onChange={(e) => setRollno(e.target.value)} />
                </div>
                <p>
                    <b>Note: </b>We use your roll number just to verify that you are a student of this college. We don't save it.
                </p>
                <button type="submit" className="flex justify-center border-2 rounded-xl border-white m-auto hover:border-2 hover:border-black hover:bg-white p-2 hover:cursor-pointer" onClick={Post}>
                    Submit
                </button>
            </dialog>
        </>

    )
}; 
