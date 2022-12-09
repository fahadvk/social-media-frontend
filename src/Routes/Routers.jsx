import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignupPage";
import HomePage from "../Pages/HomePage";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Create from "../Pages/CreatePostPage";
import Loginnew from "../components/Login/Login";
import ProfilePage from "../Pages/ProfilePage";

function Routing(props) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              {" "}
              <HomePage />{" "}
            </PrivateRoutes>
          }
          exact
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              {" "}
              <Loginnew />{" "}
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes>
              {" "}
              <SignUpPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoutes>
              <Create />
            </PrivateRoutes>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
