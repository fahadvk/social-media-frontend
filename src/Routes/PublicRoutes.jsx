import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
function PublicRoutes({ children }) {
  // const Navigate = useNavigate()
  const cookie = new Cookies();
  if (cookie.get("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default PublicRoutes;
