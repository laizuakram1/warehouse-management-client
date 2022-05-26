import React from 'react';
import './NotFound.css';
import Image from '../../images/pageNotFound/NotFoundImage.jpg';


const NotFound = () => {
    return (
        <div className='notFoundPage'>
            <img src={Image} alt="notFound" />
        </div>
    );
};

export default NotFound;