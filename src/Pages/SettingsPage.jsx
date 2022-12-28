import { Flex, useMediaQuery } from "@chakra-ui/react";
import LeftSidebar from "../components/Common/LeftSideBar/LeftSideBar";
import NavigationCard from "../components/Common/RightSideBar/RightSideBar";
import Settings from "../components/Settings/Settings";

function SettingsPage() {
  const [isMobile] = useMediaQuery("(min-width: 1196px)");

  return (
    <Flex justifyContent="space-between" gap="0" marginTop="0">
      <div className=" RightSideBar invisible  lg:visible">
        {isMobile && <NavigationCard />}
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
