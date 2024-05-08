import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>;
  }
  if (loading) {
    return <Spinner></Spinner>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
