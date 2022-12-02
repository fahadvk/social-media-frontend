

import React, { useEffect } from 'react';
import Feed from './Feed/Feed';
import './index.css'
import Navbar from './Navbar/Navbar';
import LeftSidebar from './Navbar/SideBar/LeftSideBar';
import RightSidebar from './Navbar/SideBar/Sidebar';
import ProfileSide from './ProfileSide/ProfileSide';
import { Flex, Spacer } from '@chakra-ui/react'
// import Button from './Navbar/SideBar/button';


function Home(props) {

    return (
        <>

            <div className="nav">
                <Navbar />
            </div>
            <div className="Home">
                <Flex gap="2rem" justifyContent="space-between">

                    <div className="RightSidebar">
                        <RightSidebar />
                    </div>
                    {/* <Feed /> */}
                    <div>
                        {/* <Button></Button> */}
                        <h2> korach oombiya posts</h2>
                    </div>
                    <LeftSidebar />
                    {/* <ProfileSide />  */}
                </Flex>

                {/* <div className='profile side'>okbye </div> */}
            </div>
        </>
    );
}

export default Home;


