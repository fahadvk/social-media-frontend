/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Box, Text } from "@mantine/core";
import { Avatar } from "@chakra-ui/react";
import "./LeftSideBar.css";
import { fetchSuggestedUsersApi, followuser } from "../../../apiRequests/authapis";

function LeftSidebar() {
  const [suggested, setSuggested] = useState([]);
  async function fetchSuggestedUsers() {
    const { data } = await fetchSuggestedUsersApi();
    setSuggested(data);
  }
  const followUser = async (id) => {
    await followuser(id);
   fetchSuggestedUsers()
  };

  useEffect(() => {
    fetchSuggestedUsers();
  }, []);
  return (
    <div className="p-6  w-1/2 h-screen bg-white z-50 -right-96 fixed top-0 ease-out delay-150 duration-200">
      <Box
        sx={{
          backgroundColor: "white",
          width: 400,
          height: 800,
        }}
      >
        <h4 className="text-center text-lg font-semibold  mb-6 mt-8 ">
          Who to follow
        </h4>

        <div className="flex flex-col w-3/4 ml-12  justify-start item-center ">
          {suggested.map((user) => {
            return (
              <div className="flex   mt-2 gap-5  mb-3">
                <Avatar className="h-12 w-1/4" src="" />
                <Text className="text-lg mt-2 h-12 w-2/4">{user.name}</Text>
                <button
                  // eslint-disable-next-line no-underscore-dangle
                  onClick={() => followUser(user._id)}
                  type="button"
                  className="bg-blue w-1/4 text-gray mt-2 h-8 p-1 rounded-lg"
                >
                  follow
                </button>
              </div>
            );
          })}
        </div>

      </Box>
    </div>
  );
}

export default LeftSidebar;
