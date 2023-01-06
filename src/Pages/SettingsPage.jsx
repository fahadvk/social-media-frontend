import { Flex } from "@chakra-ui/react";
import SideBarContainer from "../Shared/RightSideBar/SideBarContainer";
import LeftSidebar from "../Shared/LeftSideBar/LeftSideBar";
import Settings from "../components/Settings/Settings";

function SettingsPage() {
  return (
    <Flex justifyContent="space-between" gap="0" marginTop="0">
      <div className=" RightSideBar   ">
        <SideBarContainer />
      </div>
      <div className="justify-self-center ml-20 w-full  lg:h-2/3">
        <Settings />
      </div>
      <div className="ml-16 LeftSideNav invisible  lg:visible ">
        <LeftSidebar />
      </div>
    </Flex>
  );
}

export default SettingsPage;
