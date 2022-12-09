import React, { useEffect } from "react";
import Feed from "./Feed/Feed";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import LeftSidebar from "./SideBar/LeftSideBar";
import Side from "./SideBar/RightSideBar";
import { Flex, Spacer } from "@chakra-ui/react";
import Posts from "./Posts/Posts";

// import Button from './Navbar/SideBar/button';

function Home(props) {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="Home">
        <Flex justifyContent="space-between" gap="0" marginTop="0">
          <div className="RightSideBar invisible  lg:visible">
            {/* <ProfileSide/> */}
            {/* {!isMobile && <RightSidebar />} */}
            <Side />
          </div>
          {/* <Feed /> */}
          <div className="Posts max-w-md ">
            <Posts />
          </div>
          <div className="LeftSideNav invisible  lg:visible ">
            <LeftSidebar />
          </div>
          {/* <ProfileSide />  */}
        </Flex>

        {/* <div className='profile side'>okbye </div> */}
      </div>
    </>
  );
}

export default Home;
