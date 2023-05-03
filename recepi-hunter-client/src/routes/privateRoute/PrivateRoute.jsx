import { Button, Spinner } from "flowbite-react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("user in private route", user);
  if (loading) {
    return (
      <Button>
        <Spinner aria-label="Spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
