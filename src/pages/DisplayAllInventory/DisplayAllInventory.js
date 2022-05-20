import React from 'react';
import { Button } from 'react-bootstrap';

const DisplayAllInventory = ({ item }) => {
    const {image, name, price, quantity, supplier, description} = item;
    return (
        <div className='inventory-items'>
            <div>
                <div className='text-center'>
                    <img src={image} alt="" />
                </div>
                <p>Name:{name}</p>
                <p className='fw-bold'>Price:${price}</p>
                <p>Quantity:{quantity}</p>
                <p>Supplier:{supplier}</p>
                <p>description:{description.slice(0, 60)}</p>

            </div>
            <div className='mt-5'>
                <Button className='updateBtn'>Delete</Button>
            </div>
        </div>
    );
};

export default DisplayAllInventory;