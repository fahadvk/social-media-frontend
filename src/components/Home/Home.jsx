

import React, { useEffect } from 'react';
import './index.css'
import ProfileSide from './ProfileSide/ProfileSide';
import {verifyuser} from '../../apiRequests/authapis'

function Home(props) {
    
// useEffect(()=>{
//    verifyuser()

// },[])

    return (
        <div className='Home'>
            <ProfileSide />
            <div className='postside'>post12skksk</div>
            <div className='profile side'>okbye </div>
        </div>
    );
}

export default Home;


