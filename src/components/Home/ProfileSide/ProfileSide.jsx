import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';

function ProfileSide(props) {
    return (
        <div className='profileSide'>
            {/* <LogoSearch/> */}
            <ProfileCard/>
        </div>
    );
}

export default ProfileSide;