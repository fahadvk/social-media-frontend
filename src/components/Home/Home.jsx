

import React, { useEffect } from 'react';
import Feed from './Feed/Feed';
import './index.css'
import Navbar from './Navbar/Navbar';
import LeftSidebar from './SideBar/LeftSideBar';
import RightSidebar from './SideBar/Sidebar';
import ProfileSide from './ProfileSide/ProfileSide';
import { Flex, Spacer } from '@chakra-ui/react'
import Posts from './Posts/Posts';
// import Button from './Navbar/SideBar/button';



function Home(props) {

    return (
        <>

            <div className="nav">
                <Navbar />
            </div>
            <div className="Home">
                <Flex justifyContent="space-between" gap='0' marginTop='0' >

                    <div className="RightSidebar">
                        <RightSidebar />
                    </div>
                    {/* <Feed /> */}
                    <div className='Posts'>
                        <Posts />
                    </div>
                    <div className='LeftSideNav'>

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


