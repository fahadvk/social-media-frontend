import { Flex } from "@chakra-ui/react";
import LeftSidebar from "../components/Common/LeftSideBar/LeftSideBar";
import NavigationCard from '../components/Common/RightSideBar/RightSideBar';
import Peoples from "../components/Peoples/Peoples";

export default function PeoplePage() {
 
    return (
     
        <Flex justifyContent="space-between" gap="0" marginTop="0">
          <div className=" RightSideBar invisible  lg:visible">
          <NavigationCard/>
          </div>
          <div className="justify-self-center ml-14 w-1/2 ">
           <Peoples/>
          </div>
          <div className="ml-16 LeftSideNav invisible  lg:visible ">
            <LeftSidebar />
          </div>
        </Flex>
     
    );
  }
