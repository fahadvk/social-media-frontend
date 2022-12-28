import { Flex } from "@mantine/core";
import SavedPost from "../components/SavedPost/SavedPost";
import NavigationCard from "../components/Common/RightSideBar/RightSideBar";
import LeftSidebar from "../components/Common/LeftSideBar/LeftSideBar";

export default function () {
  return (
    <Flex justifyContent="space-between" gap="0" marginTop="0">
      <div className=" RightSideBar invisible  lg:visible">
        <NavigationCard />
      </div>
      <div className="justify-self-center ml-14 w-1/2 ">
        <SavedPost />
      </div>
      <div className="ml-16 LeftSideNav invisible  lg:visible ">
        <LeftSidebar />
      </div>
    </Flex>
  );
}
