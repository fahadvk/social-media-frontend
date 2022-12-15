/* eslint-disable import/extensions */
import React from "react";
import {  useMediaQuery } from "@chakra-ui/react";
import "./Home.css";
import Posts from "../Feed/Posts/Posts";
import NavigationCard from "../Common/RightSideBar/RightSideBar";

// import Button from './Navbar/SideBar/button';

function Home() {
  const [isMobile] = useMediaQuery("(min-width: 1196px)");
  return (
    
      <div className="Home w-screen flex ">
        {isMobile && (
          <div className="RightSideBar   invisible   lg:visible">
            <NavigationCard />
            {/* <Side /> */}
          </div>
        )}
        {/* <Feed /> */}
        <div className="Posts  w-10/12 mr-9 lg:w-1/2 overflow-hidden">
          <Posts />
        </div>
        <div className="LeftSideNav mr-12 invisible  lg:visible ">
          {/* <LeftSidebar />  */}
          {/* <Sidebar /> */}
        </div>
        {/* <ProfileSide />  */}

        {/* <div className='profile side'>okbye </div> */}
      </div>
   
  );
}

export default Home;
