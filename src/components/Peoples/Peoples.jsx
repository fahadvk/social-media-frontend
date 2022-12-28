/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import { Tabs } from "@mantine/core";
import { useState, useEffect, useRef } from "react";
import {
  fetchAllUsers,
  findFollowedApi,
  findFollowingApi,
  searchapi,
} from "../../apiRequests/authapis";
import People from "../People/People";

export default function Peoples() {
  const [Users, setUsers] = useState([]);
  const searchRef = useRef("");
  const search = async () => {
    const { data } = await searchapi(searchRef.current.value);
    if (data) setUsers(data);
  };
  const fetchUserlist = async () => {
    const { data } = await fetchAllUsers();
    if (data) setUsers(data);
  };

  const findFollwingUsers = async () => {
    const { data } = await findFollowingApi();
    if (data) setUsers(data[0]?.following);
  };
  async function findFollowedUsers() {
    const { data } = await findFollowedApi();
    if (data) setUsers(data[0]?.followers);
  }

  useEffect(() => {
    fetchUserlist();
   
  }, []);
  return (
    <div className="mt-8 ml-8 lg:ml-16 ">
      <div className="ml-8 lg:ml-16 flex items-center">
        <div className="flex space-x-2">
          <input
            type="text"
            className="block w-full px-2 py-3 h-12 text-purple-700 bg-white border rounded-full focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            ref={searchRef}
          />

          <button
            onClick={search}
            type="button"
            className="px-5 py-4 text-white bg-blue rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <Tabs defaultValue="first" className="ml-8">
          <Tabs.List grow position="left">
            <Tabs.Tab onClick={fetchUserlist} value="first">
              All Users
            </Tabs.Tab>
            <Tabs.Tab onClick={findFollwingUsers} value="second">
              following
            </Tabs.Tab>
            <Tabs.Tab onClick={findFollowedUsers} value="third">
              followers
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <div className="flex gap-8 flex-wrap">
        {!Users?.length && (
          <h3 className="mt-3 text-center ml-16"> No Users to Display</h3>
        )}
        {Users?.map((user) => {
          return <People user={user} />;
        })}
      </div>
    </div>
  );
}
