import { Navigate } from "react-router";
import { useUser } from "../context/userContext";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const { user } = useUser();

    return user ? children : <Navigate to="/" replace />;
}



export default PrivateRoute;