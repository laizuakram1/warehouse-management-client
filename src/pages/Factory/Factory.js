import React from 'react';
import './Factory.css';
import factory1 from '../../images/factory/factory1.jpg';
import factory2 from '../../images/factory/factory2.jpg';
import factory3 from '../../images/factory/factory3.jpg';
import factory4 from '../../images/factory/factory4.jpg';


const Factory = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Our Factory</h2>

            <div className='factory-card'>
                <div><img src={factory1} alt="" /></div>
                <div><img src={factory2} alt="" /></div>
                <div><img src={factory3} alt="" /></div>
                <div><img src={factory4} alt="" /></div>
                
            </div>
        </div>
    );
};

export default Factory;