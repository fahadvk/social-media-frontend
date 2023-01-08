/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Box, Text } from "@mantine/core";
import { Avatar, useMediaQuery } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "./LeftSideBar.css";
import { fetchSuggestedUsersApi, followuser } from "../../apiRequests/Authapis";
import { setSuggestedUsers } from "../../Store/UsersSlice";

function LeftSidebar() {
  const dispatch = useDispatch();
  const { SuggestedUsers } = useSelector((state) => state.userReducer);
  const [suggested, setSuggested] = useState(SuggestedUsers);
  const [isMobile] = useMediaQuery("(max-width: 1400px)");
  async function fetchSuggestedUsers() {
    const { data } = await fetchSuggestedUsersApi();
    dispatch(setSuggestedUsers(data));
    setSuggested(data);
  }
  const followUser = async (id) => {
    await followuser(id);
    fetchSuggestedUsers();
  };

  useEffect(() => {
    if (!suggested || suggested.length < 3) fetchSuggestedUsers();
  }, []);
  return (
    <div
      className={
        isMobile
          ? "invisible"
          : "p-6 flex w-1/2  h-screen bg-white z-50 -right-96 fixed top-0 ease-out delay-150 duration-200"
      }
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: 400,
          height: 800,
        }}
      >
        <h4 className="xl:text-center   text-lg font-semibold  mb-6 mt-8 ">
          Who to follow
        </h4>

        <div className="flex  flex-col xl:w-2/3   xl:ml-12   item-center ">
          {suggested.map((user) => {
            return (
              <div className="flex justify-around  xl:flex-row mt-2  xl:gap-5  mb-3">
                <Avatar className="h-12 w-1/4" src="" />
                <Text className="text-lg mt-2 h-12 w-1/4 xl:w-2/4">
                  {user.name}
                </Text>
                <button
                  onClick={() => followUser(user._id)}
                  type="button"
                  className="bg-blue w-1/4  text-white mt-2 h-8 xl:p-1 rounded-lg"
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
