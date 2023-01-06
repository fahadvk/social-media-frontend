import { Flex } from "@chakra-ui/react";

import Users from "../components/Chats/Chats";
import SideBarContainer from "../Shared/RightSideBar/SideBarContainer";


export default function ChatPage() {
  return (
    <Flex justifyContent="center" gap="0" marginTop="0">
      <div className=" lg:w-1/4  ">
        <SideBarContainer />
      </div>
      <div className="w-full ">
        <Users />
      </div>
    </Flex>
  );
}
