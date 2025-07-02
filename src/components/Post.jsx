import { UserCircleIcon, HandThumbUpIcon, HandThumbDownIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"



export default function Posts(props) {

    const [likeActive, setlikeActive] = useState(false);
    const [dislikeActive, setdislikeActive] = useState(false);
    const [reactions, setReactions] = useState([]);
    const [likes, setlikes] = useState(0);
    const [dislikes, setdislikes] = useState(0);

    useEffect(() => {
        let savedReactions = localStorage.getItem("Reactions");
        if (savedReactions) {
            let reacts = JSON.parse(savedReactions);
            setReactions(reacts)
        }
    }, [])


    const saveToLS = () => {
        localStorage.setItem("Reactions", JSON.stringify(reactions));
    }

    // useEffect(() => {
    //     saveToLS();
    // }, [problems])




    const ToggleLike = () => {
        if (likeActive) {
            setlikeActive(false);
            likes > 0 ? setlikes(likes - 1) : setlikes(0);
        }
        else {
            setdislikeActive(false);
            setlikeActive(true);
            setlikes(likes + 1);
            dislikes > 0 ? setdislikes(dislikes - 1) : setdislikes(0);
            console.log(likes, dislikes);
        }
        console.log(likes, dislikes);
        setReactions([...reactions, { id: props.id, likes: likes, dislikes: dislikes }])
    }

    const ToggleDisLike = () => {
        if (dislikeActive) {
            setdislikeActive(false);
            dislikes > 0 ? setdislikes(dislikes - 1) : setdislikes(0);
        }
        else {
            setlikeActive(false);
            setdislikeActive(true);
            likes > 0 ? setlikes(likes - 1) : setlikes(0);
            setdislikes(dislikes + 1);
        }
    }

    return (
        <>
            {/* <div className="w-80 sm:w-9/12 h-auto border-2 border-slate-400 rounded-2xl shadow-xl sticky top-20 bg-slate-100"> */}
                <div className="flex flex-row items-center gap-2 border-b-2 border-slate-400">
                    <UserCircleIcon className="size-12 fill-slate-600" />
                    <p className="text-xl">Anonymous</p>
                </div>
                <div className="text-left place-content-center min-h-40 p-4 whitespace-pre-line">
                    {props.Content}
                </div>
                <div className="reactions flex flex-row gap-6 sm:gap-10 items-center justify-center m-auto border-t-2 border-slate-300">
                    <div className="flex flex-row items-center gap-1">
                        <button className="cursor-pointer" onClick={ToggleLike} >
                            <HandThumbUpIcon className={`size-6 sm:size-8 ${likeActive ? "fill-green-600 stroke-green-600" : "fill-none stroke-black"}`} />
                        </button>
                        <b>{likes}</b>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <button className="cursor-pointer">
                            <ChatBubbleLeftEllipsisIcon className="fill-white stroke-black size-6 sm:size-8" />
                        </button>
                        <b>Comment</b>
                    </div>
                    <div className="flex flex-row gap-1">
                        <button className="cursor-pointer" onClick={ToggleDisLike}>
                            <HandThumbDownIcon className={`size-6 sm:size-8 ${dislikeActive ? "fill-red-600 stroke-red-600" : "fill-none stroke-black"}`} />
                        </button>
                        <b>{dislikes}</b>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}