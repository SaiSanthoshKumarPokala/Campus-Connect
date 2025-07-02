import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function Username() {

    const navigate = useNavigate();
    const { updateName, currentUser } = useAuth();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const user = currentUser;
            const profile = {
                displayName: name,
            }
            await updateName(user, profile);
            console.log(currentUser);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <>
            <div className="flex items-center justify-center m-auto min-h-dvh">
                <div className="flex m-auto w-90 md:w-6/12 items-center justify-center rounded-xl border-4 font-bold border-green-300">
                    <form className="flex flex-col gap-1 md:gap-6 p-2 m-8">
                        <h1 className="p-2 text-2xl font-bold">Set your username</h1>
                        <div className="gap-1 m-auto p-2 flex flex-col items-start">
                            <label htmlFor="username">User name:</label>
                            <input type="username" name="username" required placeholder="Enter a username" id="username"
                                value={name} autoComplete="username" className="bg-white focus:outline-2 outline-offset-2 rounded-md w-80 text-black outline-white p-2 border-2 border-black" onChange={(e) => setName(e.target.value)} />
                        </div>
                        {/*defaultValue={currentUser.displayName && currentUser.displayName} */}

                        <button onClick={handleUpdate} disabled={loading} className="bg-green-300 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Set username</button>
                    </form>
                </div>
            </div>
        </>
    )
}