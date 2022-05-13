import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';

var currentYear = new Date().getFullYear();

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
                <p><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></p>
                <p><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></p>
                <p><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></p>
                

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