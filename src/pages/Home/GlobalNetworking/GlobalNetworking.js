import React from 'react';
import './GlobalNetworking.css';
import globalImg from '../../../images/global.jpg';
import { Button } from 'react-bootstrap';
const GlobalNetworking = () => {
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Our Global Network</h2>
            <div className='d-flex p-3'>
                <div className='global-title'>
                    <p>We are here to international market and create our industry. Our prodcut build every different environment and make sure client requirements.</p>
                    <Button className='global-Btn'>Check Network</Button>
                </div>
                <div className='global-image'>
                    <img src={globalImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GlobalNetworking;