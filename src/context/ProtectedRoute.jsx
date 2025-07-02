import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const { currentUser } = useAuth();

    if (currentUser) {
        return children ;
    }

    // alert("YOu need to login to proceed");
    return <Navigate to="/login" />

}