import React, { Children, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { verifyuser } from "../apiRequests/authapis";
import { setAuth, setName } from "../store/authSlice";

function PrivateRoute({ children, page }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    check();
  }, [auth]);
  if (auth) return children;
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
