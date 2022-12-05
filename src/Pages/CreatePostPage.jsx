import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import RightSidebar from "../components/Home/SideBar/Sidebar";
import LeftSidebar from "../components/Home/SideBar/LeftSideBar";
import CreateComponent from "../components/Create/CreatePost";

const Create = () => {
  useEffect(() => {
    document.title = " Create post";
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        gridTemplateColumns="22vw auto 24vw"
        columnGap="2rem"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <RightSidebar />
        <CreateComponent />
        <LeftSidebar />
      </Grid>
    </div>
  );
};

export default Create;
