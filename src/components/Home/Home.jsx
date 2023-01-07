/* eslint-disable import/extensions */
import React from "react";
import "./Home.css";
import Posts from "../Posts/Posts";
import LeftSidebar from "../../Shared/LeftSideBar/LeftSideBar";
import SideBarContainer from "../../Shared/RightSideBar/SideBarContainer";

function Home() {
  return (
    <div className="Home w-screen  flex  ">
      <div className="RightSideBar ">
        <SideBarContainer />
      </div>
      <div  className="mt-12  w-full lg:w-1/2   overflow-hidden">
        <Posts />
      </div>
      <div className="LeftSideNav  mr-12 invisible  lg:visible ">
        <LeftSidebar />
      </div>
    </div>
  );
}

export default Home;
