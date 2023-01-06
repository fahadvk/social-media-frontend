/* eslint-disable no-use-before-define */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { changeLoad } from "../Store/LoaderSlice";

function AdminRoute({ children }) {
  const cookie = new Cookies();
  const token = cookie.get("Admintoken");
  const Navigate = useNavigate();
  if (!token) {
    return Navigate("/admin/login");
  }
  function checkAdmin()
  {
    
  }
}

export default AdminRoute;
