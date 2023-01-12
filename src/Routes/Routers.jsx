import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignUpPage from "../Pages/SignupPage";
import HomePage from "../Pages/HomePage";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Login from "../components/Login/Login";
import ProfilePage from "../Pages/ProfilePage";
import SettingsPage from "../Pages/SettingsPage";
import PeoplePage from "../Pages/PeoplePage";
import SavedPostPage from "../Pages/SavedPostPage";
import ChatPage from "../Pages/ChatPage";
import SinglePost from "../Pages/SinglePost";
import AdminLogin from "../Pages/AdminLogin";
import AdminHome from "../Pages/AdminHome";
import AdminRoute from "./AdminProtectedRote";
import Error from "../Pages/Error";

function Routing() {
  return (
    // <Router>
    <HashRouter>
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
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoutes>
              <SignUpPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <ProfilePage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoutes>
              <SettingsPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/people"
          element={
            <PrivateRoutes>
              <PeoplePage />
            </PrivateRoutes>
          }
        />

        <Route
          path="/savedPosts"
          element={
            <PrivateRoutes>
              <SavedPostPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/messages"
          element={
            <PrivateRoutes>
              <ChatPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/post/:postid"
          element={
            <PrivateRoutes>
              <SinglePost />
            </PrivateRoutes>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/home"
          element={
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* </Router> */}
    </HashRouter>
  );
}

export default Routing;
