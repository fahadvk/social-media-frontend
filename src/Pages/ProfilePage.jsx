import { Flex } from "@chakra-ui/react";

import { Header } from "@mantine/core";
import { useLocation } from "react-router-dom";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import SideBarContainer from "../Shared/RightSideBar/SideBarContainer";
import LeftSidebar from "../Shared/LeftSideBar/LeftSideBar";
import UserPosts from "../components/UserPosts/UserPosts";

function ProfilePage() {
  const location = useLocation();
  const { userId } = location.state;
  return (
    <Flex justifyContent="space-between" gap="0" marginTop="0">
      <div className=" RightSideBar   ">
        <SideBarContainer />
      </div>
      <div className="justify-self-center ml-14 w-1/2 ">
        <ProfileCard id={userId} />
        <Header className="text-center font-bold p-5 w-full"> Posts</Header>
        <UserPosts id={userId} />
      </div>
      <div className="ml-16 LeftSideNav invisible  lg:visible ">
        <LeftSidebar />
      </div>
    </Flex>
  );
}

export default ProfilePage;
