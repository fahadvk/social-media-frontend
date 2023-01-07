/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function AdminSideBar({ setSelected }) {
  const cookie = new Cookies();
  const navigate = useNavigate();
  return (
    <div className="p-10 ml   h-screen  bg-blue z-20 fixed top-0  -left-72  left-0 w-64  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      <h3 className="text-center  text-white mb-4 font-normal text-xl">
        SnapFeed Admin
      </h3>

      <div className="flex flex-col justify-start item-center ">
        {/* <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full"></h1> */}
        <div
          onClick={() => setSelected("user")}
          className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blend-darken p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-users"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
            Users
          </h3>
        </div>
        <div
          onClick={() => setSelected("posts")}
          className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-inbox"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M4 13h3l3 3h4l3 -3h3" />
          </svg>
          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
            Posts
          </h3>
        </div>
        <div
          onClick={() => {
            cookie.set("Admintoken", "");
            navigate("/admin/login");
          }}
          className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
}
