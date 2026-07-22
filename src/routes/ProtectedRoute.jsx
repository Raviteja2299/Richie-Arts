import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    console.log("Loading:", loading);
    console.log("User:", user);

    // Show a loading screen while checking the session
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <h3>Loading...</h3>
            </div>
        );
    }

    
    if (!user) {
        return (
            <Navigate
                to="/admin/login"
                state={{ from: location }}
                replace
            />
        );
    }

    // User is authenticated
    return children;
}