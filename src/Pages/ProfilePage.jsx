import { Flex } from "@chakra-ui/react";

import { Header } from "@mantine/core";
import ProfileCard from "../components/ProfileCard/ProfileCard";

import LeftSidebar from "../components/Common/LeftSideBar/LeftSideBar";
import NavigationCard from '../components/Common/RightSideBar/RightSideBar';
import UserPosts from "../components/UserPosts/UserPosts";

function ProfilePage() {
 
  return (
   
      <Flex justifyContent="space-between" gap="0" marginTop="0">
        <div className=" RightSideBar invisible  lg:visible">
        <NavigationCard/>
        </div>
        <div className="justify-self-center ml-14 w-1/2 ">
          <ProfileCard />
          <Header className="text-center font-bold p-5 w-full"> Posts</Header>
          <UserPosts />
        </div>
        <div className="ml-16 LeftSideNav invisible  lg:visible ">
          <LeftSidebar />
        </div>
      </Flex>
   
  );
}

export default ProfilePage;
