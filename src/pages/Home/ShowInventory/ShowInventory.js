import { Button } from 'react-bootstrap';
import React from 'react';
import './ShowInventory.css';

const ShowInventory = ({item}) => {
    const {image, name, price, quantity, supplier, description} = item;
    return (
        <div className='inventory-items'>
           <div>
           <img src={image} alt="" />
            <p>{name}</p>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>Supplier:{supplier}</p>
            <p>description:{description}</p>
          
           </div>
           <Button className='updateBtn'>Update</Button>
           
            
    
        </div>
    );
};

export default ShowInventory;