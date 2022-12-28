import { Flex } from "@chakra-ui/react";
import Chat from "../components/Chat/Conversation";
import Users from "../components/Chat/Chat";
import NavigationCard from "../components/Common/RightSideBar/RightSideBar";

export default function ChatPage() {
  return (
    <Flex justifyContent="center" gap="0" marginTop="0">
      <div className=" RightSideBar invisible  lg:visible">
        <NavigationCard />
      </div>
      <div className="w-full ">
        <Users />
      </div>
      {/* <div className="w-1/2 ">
        <Chat />
      </div> */}

      {/* <div className="ml-16 LeftSideNav invisible  lg:visible ">
          <LeftSidebar />
        </div> */}
    </Flex>
  );
}
