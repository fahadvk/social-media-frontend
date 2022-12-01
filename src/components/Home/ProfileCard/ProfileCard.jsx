import React from 'react'
import Cover from '../../../assets/cover.jpg'
import Profile from '../../../assets/profileImg.jpg'
import './ProfileCard.css'
// import '../../App.css'   


const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />

            </div>
            <div className="ProfileName">
                <span>Cinderella</span>
                <span>Senior Backend Develepor</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className='follow'>
                        <span>6,456</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className='follow'>
                        <span>2</span>
                        <span>Followers</span>
                    </div>
                </div>

                <hr />
            </div>

            <span>
                My profile
            </span>
        </div>
    )
}

export default ProfileCard