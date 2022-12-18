/* eslint-disable no-use-before-define */
import  {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { verifyuser } from "../apiRequests/authapis";
import { setAuth, setName,setUserId } from "../store/authSlice";

function PrivateRoute({ children }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    check();
  }, [auth]);
  if (auth) return children;
  // eslint-disable-next-line consistent-return
  async function check() {
    if (!token) {
      return Navigate("/login");
    }
    if (auth) {
      return children;
    }

    try {
      const res = await verifyuser();
      if (res.data.id) {
        dispatch(setAuth(true));
        dispatch(setName(res.data.name));
        // eslint-disable-next-line no-underscore-dangle
        dispatch(setUserId(res.data.id))
      } else {
        cookie.remove("token");
        return Navigate("/login");
      }
    } catch (error) {
      cookie.remove("token");
      return Navigate("/login");
    }
  }
}

export default PrivateRoute;
