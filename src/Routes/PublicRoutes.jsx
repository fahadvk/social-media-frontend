/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

function PublicRoutes({ children }) {
  // const Navigate = useNavigate()
  const cookie = new Cookies();
  if (cookie.get("token")) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PublicRoutes;
