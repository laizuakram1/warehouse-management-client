import React from 'react';
import './DisplayAllInventory.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DisplayAllInventory = ({ item }) => {
    const {image, name, price, quantity, supplier, description,} = item;

    const handleDelete = ()=>{
        console.log('item deleted');
        window.confirm('are sure delete this product?');

    }

   
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
                <p>description:{description}</p>

            </div>
            <div className='mt-5 text-center'>
            <Button className='delete-Btn' onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    );
};

export default DisplayAllInventory;