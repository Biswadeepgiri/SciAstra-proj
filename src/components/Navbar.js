import React from 'react'
import './Navbar.css';
import logo from '../images/sastralogo.png';
const Navbar = () => {
    return (

        <div>
            <ul className='navbar'>
                <li className='navbar-li'>
                    <img src={logo} className='logo' alt="logo" />
                </li>
                <li>
                    <a href='' >Home</a>
                </li>
                <li>
                    <a href='' >Courses</a>
                </li>
                <li>
                    <a href='' >Selection</a>
                </li>
                <li>
                    <a href='' >Blogs</a>
                </li>
                <li>
                    <a href='' >Material</a>
                </li>
                <li>
                    <a href='' >
                        <b><u>Team</u></b></a>
                </li>
                <li>
                    <a href='' >Contact</a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;