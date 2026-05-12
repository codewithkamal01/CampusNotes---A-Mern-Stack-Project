import { Navigate } from "react-router-dom";
import { toast } from "sonner";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.warning("Please login to access upload page");

    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
