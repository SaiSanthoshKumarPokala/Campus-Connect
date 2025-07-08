import { UserCircleIcon, HandThumbUpIcon, HandThumbDownIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"
import { collection, doc, getDoc, getDocs, updateDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../firebaseConfig";
import { useAuth } from "../../hooks/useAuth";



export default function Posts(props) {

    const [likeActive, setlikeActive] = useState(false);
    const [dislikeActive, setdislikeActive] = useState(false);
    const [reactions, setReactions] = useState([]);
    const [likes, setlikes] = useState(props.likes);
    const [dislikes, setdislikes] = useState(props.dislikes);
    const { currentUser } = useAuth();

    const LoadData = () => {
        if (props.liked.includes(`${currentUser.uid}`)) {
            setlikeActive(true);
        }
        else if (props.disliked.includes(`${currentUser.uid}`)) {
            setdislikeActive(true);
        }
    }



    useEffect(() => {
        LoadData();
    }, [])

    // useEffect(() => {
    //     let savedReactions = localStorage.getItem("Reactions");
    //     if (savedReactions) {
    //         let reacts = JSON.parse(savedReactions);
    //         setReactions(reacts)
    //     }
    // }, [])


    // const saveToLS = () => {
    //     localStorage.setItem("Reactions", JSON.stringify(reactions));
    // }

    // useEffect(() => {
    //     saveToLS();
    // }, [problems])


    // const ToggleLike = () => {
    //     if (likeActive) {
    //         setlikeActive(false);
    //         likes > 0 ? setlikes(likes - 1) : setlikes(0);
    //     }
    //     else {
    //         setdislikeActive(false);
    //         setlikeActive(true);
    //         setlikes(likes + 1);
    //         dislikes > 0 ? setdislikes(dislikes - 1) : setdislikes(0);
    //         console.log(likes, dislikes);
    //     }
    //     console.log(likes, dislikes);
    //     setReactions([...reactions, { id: props.id, likes: likes, dislikes: dislikes }])
    // }

    // const ToggleDisLike = () => {
    //     if (dislikeActive) {
    //         setdislikeActive(false);
    //         dislikes > 0 ? setdislikes(dislikes - 1) : setdislikes(0);
    //     }
    //     else {
    //         setlikeActive(false);
    //         setdislikeActive(true);
    //         likes > 0 ? setlikes(likes - 1) : setlikes(0);
    //         setdislikes(dislikes + 1);
    //     }
    // }

    // const fetchData = async () => {
    //     const UserSnapshot = await getDocs(collection(db, `users/${currentUser.uid}/Reactions`));
    //     // setproblems(UserSnapshot.docs);
    //     console.log(UserSnapshot.docs);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const ToggleLike = async (e, id) => {

        // const ref = doc(db, `users/${currentUser.uid}/Reactions`, id);
        // const docsnap = await getDoc(ref);

        // let liked = docsnap.data().Liked;
        // let disliked = docsnap.data().Disliked;
        // console.log(liked,disliked);

        // if (liked) {
        //     setlikeActive(true);
        //     setdislikeActive(false);
        // }
        // else if (disliked) {
        //     setdislikeActive(true);
        //     setlikeActive(false);
        // }
        // else {
        //     setdislikeActive(false);
        //     setlikeActive(false);
        // }

        // const Ref = doc(db, `Problems`, id);
        // const docSnap = await getDoc(Ref);

        // let LIKES = docSnap.data().Likes;
        // let DISLIKES = docSnap.data().Dislikes;

        // console.log(LIKES, DISLIKES);

        // if (likeActive) {
        //     setlikeActive(false);
        //     LIKES > 0 ? await updateDoc(Ref, {
        //         Likes: LIKES - 1,
        //     }) : await updateDoc(Ref, {
        //         Likes: 0,
        //     });
        //     await updateDoc(ref, {
        //         Liked: false,
        //     });
        // }
        // else {
        //     if (dislikeActive) {
        //         setdislikeActive(false);
        //         setlikeActive(true);
        //         await updateDoc(Ref, {
        //             Likes: LIKES + 1,
        //         });
        //         DISLIKES > 0 ? await updateDoc(Ref, {
        //             Dislikes: DISLIKES - 1,
        //         }) : await updateDoc(Ref, {
        //             Dislikes: 0,
        //         });
        //         await updateDoc(ref,{
        //             Disliked: false,
        //         });
        //     }
        //     else {
        //         setlikeActive(true);
        //         await updateDoc(Ref, {
        //             Likes: LIKES + 1,
        //         });
        //         await updateDoc(ref,{
        //             Liked: true,
        //         });
        //     }
        // }
        // // fetchData();
        const Ref = doc(db, `Problems`, id);
        const docSnap = await getDoc(Ref);

        let LIKES = docSnap.data().Likes;
        let DISLIKES = docSnap.data().Dislikes;
        let LIKED = docSnap.data().Liked;
        let DISLIKED = docSnap.data().Disliked;
        if (!likeActive && !dislikeActive) {
            console.log(LIKED);
            LIKED.push(`${currentUser.uid}`);
            console.log(LIKED);
            await updateDoc(Ref, {
                Likes: LIKES + 1,
                Liked: LIKED,
            });
            setlikeActive(true);
        }
        else if (likeActive) {
            LIKED.pop(`${currentUser.uid}`);
            await updateDoc(Ref, {
                Likes: LIKES - 1,
                Liked: LIKED,
            });
            setlikeActive(false);
        }
        else if (dislikeActive) {
            console.log(DISLIKED);
            DISLIKED.pop(`${currentUser.uid}`);
            LIKED.push(`${currentUser.uid}`);
            console.log(DISLIKED);
            await updateDoc(Ref, {
                Likes: LIKES + 1,
                Disliked: DISLIKED,
                Liked: LIKED,
                Dislikes: DISLIKES - 1,
            });
            setlikeActive(true);
            setdislikeActive(false);
        }
        LoadData();
        window.location.reload();

    }

    const ToggleDisLike = async (e, id) => {

        // const Ref = doc(db, `users/${currentUser.uid}/Todos`, id);
        // const docSnap = await getDoc(Ref);

        // let value = docSnap.data().isCompleted;
        // await updateDoc(Ref, {
        //     isCompleted: !value,
        // });

        // const ref = doc(db, `users/${currentUser.uid}/Reactions`, id);
        // const docsnap = await getDoc(ref);

        // let liked = docsnap.data().Liked;
        // let disliked = docsnap.data().Disliked;

        // if (liked) {
        //     setlikeActive(true);
        //     setdislikeActive(false);
        // }
        // else if (disliked) {
        //     setdislikeActive(true);
        //     setlikeActive(false);
        // }
        // else {
        //     setdislikeActive(false);
        //     setlikeActive(false);
        // }

        // const Ref = doc(db, `Problems`, id);
        // const docSnap = await getDoc(Ref);

        // let LIKES = docSnap.data().Likes;
        // let DISLIKES = docSnap.data().Dislikes;

        // console.log(LIKES, DISLIKES);

        // if (dislikeActive) {
        //     setdislikeActive(false);
        //     DISLIKES > 0 ? await updateDoc(Ref, {
        //         Disikes: DISLIKES - 1,
        //     }) : await updateDoc(Ref, {
        //         Dislikes: 0,
        //     });
        //     await updateDoc(ref, {
        //         Disliked: false,
        //     });
        // }
        // else {
        //     if (likeActive) {
        //         setlikeActive(false);
        //         setdislikeActive(true);
        //         await updateDoc(Ref, {
        //             Dislikes: DISLIKES + 1,
        //         });
        //         LIKES > 0 ? await updateDoc(Ref, {
        //             Likes: LIKES - 1,
        //         }) : await updateDoc(Ref, {
        //             Likes: 0,
        //         });
        //         await updateDoc(ref, {
        //             Liked: false,
        //         });
        //     }
        //     else {
        //         setdislikeActive(true);
        //         await updateDoc(Ref, {
        //             Dislikes: DISLIKES + 1,
        //         });
        //         await updateDoc(ref, {
        //             Disliked: true,
        //         });
        //     }
        // }
        // // fetchData();
        const Ref = doc(db, `Problems`, id);
        const docSnap = await getDoc(Ref);

        let LIKES = docSnap.data().Likes;
        let DISLIKES = docSnap.data().Dislikes;
        let LIKED = docSnap.data().Liked;
        let DISLIKED = docSnap.data().Disliked;
        if (!likeActive && !dislikeActive) {
            console.log(DISLIKED);
            DISLIKED.push(`${currentUser.uid}`);
            console.log(DISLIKED);
            await updateDoc(Ref, {
                Dislikes: DISLIKES + 1,
                Disliked: DISLIKED,
            });
            setdislikeActive(true);
        }
        else if (dislikeActive) {
            console.log(DISLIKED);
            DISLIKED.pop(`${currentUser.uid}`);
            console.log(DISLIKED);
            await updateDoc(Ref, {
                Dislikes: DISLIKES - 1,
                Disliked: DISLIKED,
            });
            setdislikeActive(false);
        }
        else if (likeActive) {
            console.log(LIKED);
            LIKED.pop(`${currentUser.uid}`);
            DISLIKED.push(`${currentUser.uid}`);
            console.log(LIKED);
            await updateDoc(Ref, {
                Dislikes: DISLIKES + 1,
                Liked: LIKED,
                Disliked: DISLIKED,
                Likes: LIKES - 1,
            });
            setdislikeActive(true);
            setlikeActive(false);
        }
        LoadData();
        window.location.reload();
    }

    return (
        <div key={props.id} className="w-80 sm:w-9/12 h-auto border-2 border-slate-400 rounded-2xl shadow-xl sticky top-20 bg-slate-100">
            <div className="flex flex-row items-center gap-2 border-b-2 border-slate-400">
                <UserCircleIcon className="size-12 fill-slate-600" />
                <p className="text-xl">Anonymous</p>
            </div>
            <div className="text-left place-content-center min-h-40 p-4 whitespace-pre-line">
                {props.Content}
            </div>
            <div className="reactions flex flex-row gap-6 sm:gap-10 items-center justify-center m-auto border-t-2 border-slate-300">
                <div className="flex flex-row items-center gap-1">
                    <button className="cursor-pointer" onClick={(e) => ToggleLike(e, props.id)} >
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
                    <button className="cursor-pointer" onClick={(e) => ToggleDisLike(e, props.id)}>
                        <HandThumbDownIcon className={`size-6 sm:size-8 ${dislikeActive ? "fill-red-600 stroke-red-600" : "fill-none stroke-black"}`} />
                    </button>
                    <b>{dislikes}</b>
                </div>
            </div>
        </div>
    )
}