import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { currentUser, handleLogin } = useAuth();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    const HandleLogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await handleLogin(email, password);
            navigate("/");
        }
        catch (error) {
            if(error="auth/invalid-credential"){
                alert("Invalid Credentials. Try again");
            }
            else{
                alert(error);
                console.log(error)
            }
        }
        setLoading(false);
    }

    return (
        <>
            <div className="flex items-center min-h-10/12 justify-center m-auto text-white">
                <div className="flex m-auto w-90 md:w-6/12 items-center justify-center rounded-xl border-4 font-bold border-orange-400">
                    <form className="flex flex-col gap-1 md:gap-6 p-2 m-8">
                        <h1 className="p-2 text-2xl font-bold">Login Using Email ID and Password</h1>
                        <div className="gap-1 m-auto flex flex-col items-start p-2">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="you@gmail.com" autoComplete="email" value={email} className="bg-white focus:outline-2 outline-offset-2 rounded-md w-80 text-black outline-white p-2 border-2 border-black" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="gap-1 m-auto p-2 flex flex-col items-start">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" placeholder="Password" autoComplete="current-password" id="password" value={password} className="bg-white focus:outline-2 outline-offset-2 rounded-md w-80 text-black outline-white p-2 border-2 border-black" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button onClick={HandleLogin} className="bg-orange-400 text-indigo-950 rounded-xl p-2 border-2 border-white m-2 cursor-pointer active:outline-2 outline-amber-700">Login</button>
                        <p className="font-bold text-center">Don't have an account? <Link to="/register" className="underline-offset-1 underline cursor-pointer text-white">Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}