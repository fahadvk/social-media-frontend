import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Login from "../components/Login/Login";

export default function AdminPage() {
  const Navigate = useNavigate();
  const cookie = new Cookies();
  const token = cookie.get("Admintoken");
  useEffect(() => {
    if (token) Navigate("/admin/home");
  }, []);
  return <Login admin />;
}
