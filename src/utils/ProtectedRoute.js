import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = useSelector((store) => store.user);

    // ❌ brak usera → redirect
    if (!user) {
        return <Navigate to="/" />;
    }

    // ✅ user istnieje → dostęp
    return children;
};

export default ProtectedRoute;