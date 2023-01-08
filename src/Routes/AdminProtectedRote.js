/* eslint-disable no-use-before-define */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { verifyAdmin } from "../apiRequests/AdminApis";
import { setAdminAuth } from "../Store/AuthSlice";

function AdminRoute({ children }) {
  const cookie = new Cookies();
  const token = cookie.get("Admintoken");
  const { admin } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  async function checkAdmin() {
    try {
      const { data } = await verifyAdmin();
      if (data) {
        dispatch(setAdminAuth(true));
        return children;
      }
      // return cookie.remove("Admintoken");
    } catch (error) {
      cookie.remove("Admintoken");
      // Navigate("/admin/login");
      // window.location.href = "/admin/login";
    }
  }
  useEffect(() => {
    if (!token) {
      Navigate("/admin/login");
    }
    checkAdmin();
  }, []);

  if (admin) return children;
}

export default AdminRoute;
