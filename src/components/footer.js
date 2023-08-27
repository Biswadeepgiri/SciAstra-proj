import React from 'react'
import logo from '../images/sastralogo.png';
import { BiCopyright } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { FiBook } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { MdFindInPage } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import './footer.css';


const footer = () => {
    return (
        <React.Fragment>
            <div className='footer_st'>
                <br>
                </br>
                <br></br>

                <ul className='footer'>
                    <li>
                        <img src={logo} className='logo' alt="logo" />
                    </li>
                    <li className='footer-list'>
                        <BiCopyright /><h3>SciAstra</h3>

                    </li>
                    <li className='footer-list'>
                        <AiOutlineHome />
                        <h4>Home</h4>
                    </li>
                    <li className='footer-list'>
                        <FiBook />
                        <h4>Our Courses</h4>
                    </li>
                    <li className='footer-list'>
                        <FaRegComment />
                        <h4>Blog</h4>
                    </li>
                    <li className='footer-list'>
                        <MdFindInPage />
                        <h4>Free Materials</h4>
                    </li>
                    <li className='footer-list'>
                        <AiOutlineTeam />
                        <h4>Our Team</h4>
                    </li>
                    <li className='footer-list'>
                        <AiOutlinePhone />
                        <h4>Contact Us</h4>
                    </li>

                </ul>
            </div>

        </React.Fragment>
    )
}

export default footer