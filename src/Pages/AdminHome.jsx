import { useEffect, useState } from "react";
// import AdminHomeBody from "../components/AdminHome/AdminHome";
import AdminSideBar from "../components/AdminSideBar/AdminSideBar";
import PostList from "../components/PostListAdmin/PostList";
import UserList from "../components/UserList/UserList";

export default function AdminHome() {
  const [selected, setSelected] = useState("user");

  useEffect(() => {}, []);
  return (
    <div className="flex w-full ">
      <div className="w-1/4">
        <AdminSideBar setSelected={setSelected} />
      </div>
      {selected === "posts" ? <PostList /> : <UserList />}
      {/* <AdminHomeBody selected={selected} /> */}
    </div>
  );
}
