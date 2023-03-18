import React from 'react';

import avatar from '../assets/avatar.png';
import arrowDown from '../assets/arrowDown.png';

import '../style/NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <img className='arrow' src={arrowDown} alt='avatar' />
            <div className='user'>
                <div className='user-name'>ישראל אברמסון-לוי</div>
                <div className='user-details'>משתמש מערכת</div>
            </div>
            <img className='avatar' src={avatar} alt='avatar' />
        </div>
    )
}

export default NavBar