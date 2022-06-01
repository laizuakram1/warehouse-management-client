import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faCoffee} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { FaFacebookF, FaViber, FaYoutube } from "react-icons/fa";




const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-title-box'>
                <div className='footer-line'></div>
                <div className='footer-title'>
                    <h3>Lab care</h3>
                    <p>International</p>
                </div>
                <div className='footer-line'></div>
            </div>
            <div className='footer-info'>
                <div><p>Privacy policy</p>
                    <p>Terms & condiotion</p>
                    <p>About</p>
                </div>
                <div className='social-link'>
                <p><FaFacebookF/></p>
                <p><FaViber/></p>
                <p>< FaYoutube/></p>
                

                </div>
                <div>
                    <p>Shopping Info</p>
                    <p>Return / Exchange</p>
                    <p>Contact</p>
                </div>
            </div>
            <footer className='text-center'> <small>&copy; Copyright 2022 | Lab care International</small> </footer> 
        </div>
    );
};

export default Footer;