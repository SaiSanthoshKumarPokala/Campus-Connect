import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { AuthContext } from "../../hooks/useAuth";


function AuthProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])


    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleLogout = () => {
        return signOut(auth);
    }

    const updateName = (user, profile) => {
        return updateProfile(user, profile);
    }

    const value = {
        currentUser,
        handleLogin,
        handleRegister,
        handleLogout,
        updateName
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export { AuthProvider as default };
