import React from 'react';
import Home from '../components/Home/Home';
import '../App.css'
function HomePage(props) {
    return (
        <div className='Home'>
            <div className='blur' style={{ top: '-18%', right: '0' }}></div>
            <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
            <Home />
        </div>
    );
}

export default HomePage;