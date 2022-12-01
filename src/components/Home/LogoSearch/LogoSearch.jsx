import React from 'react';
import react from '../../../assets/react.svg'
import { UilSearch } from '@iconscout/react-unicons'
import "./Logosearch.css"
function LogoSearch(props) {
    return (
        <div className='LogoSearch'>
            <img src={react}></img>
            <div className="Search">
                <input type="text" placeholder="#explore"></input>
                <div className='S-Icon'>
                    <UilSearch />
                </div>


            </div>

        </div>
    );
}

export default LogoSearch;