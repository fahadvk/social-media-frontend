import { Flex } from "@chakra-ui/react";
import SideBarContainer from "../Shared/RightSideBar/SideBarContainer";
import LeftSidebar from "../Shared/LeftSideBar/LeftSideBar";
import Peoples from "../components/Peoples/Peoples";

export default function PeoplePage() {
  return (
    <Flex
      justifyContent="space-between"
      className="w-screen"
      gap="0"
      marginTop="0"
    >
      <div className=" RightSideBar">
        <SideBarContainer />
      </div>
      <div className="justify-self-center ml-14 w-1/2 ">
        <Peoples />
      </div>
      <div className="ml-16 LeftSideNav invisible  lg:visible ">
        <LeftSidebar />
      </div>
    </Flex>
  );
}
