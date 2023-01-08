/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import React from "react";

import {
  MdOutlineSpaceDashboard,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { IconUserSearch } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

function SideNavbar() {
  const cookie = new Cookies();
  const { userId } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="p-10 ml  h-screen  bg-white z-20 fixed top-0  -left-72  left-0 w-64  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <h3 className="text-center  text-blue mb-4 font-normal text-xl">
          SnapFeed
        </h3>
    
        <div className="flex flex-col justify-start item-center ">
          {/* <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full"></h1> */}
          <div className=" my-4 border-b border-gray-200 pb-6">
            <div
              onClick={() => navigate("/")}
              className="flex mb-2 justify-start items-center gap-4 pl-5   hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Home
              </h3>
            </div>
            <div
              onClick={() => navigate(`/profile`,{state:{userId}})}
              className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Profile
              </h3>
            </div>
            <div onClick={()=> navigate('/messages')} className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Messages
              </h3>
            </div>
            <div
              onClick={() => navigate("/people")}
              className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <IconUserSearch
                // size={48}
                // strokeWidth={2.5}
                color="black"
                className="text-2xl text-gray-600 group-hover:text-white "
              />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Find People
              </h3>
            </div>
            <div 
              onClick={() => navigate("/savedPosts")}
            className="flex  mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Saved Posts
              </h3>
            </div>
          </div>
          {/* setting  */}
          <div className=" my-4 border-b border-gray-100 pb-4">
            <div
              onClick={() => navigate("/settings")}
              className="flex mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Settings
              </h3>
            </div>
            {/* <div className="flex mb-2 justify-start items-center gap-4 pl-5  hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                More
              </h3>
            </div> */}
          </div>
          {/* logout */}
          <div className=" my-4">
            <div
              onClick={() => {
                cookie.remove("token");
                navigate("/login");
              }}
              className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200   hover:bg-blue p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
