import { Button } from 'react-bootstrap';
import React from 'react';
import './ShowInventory.css';

const ShowInventory = ({item}) => {
    const {image, name, price, quantity, supplier, description} = item;
    return (
        <div className='inventory-items'>
           <div>
          <div className='text-center'>
          <img src={image} alt="" />
          </div>
            <p>{name}</p>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>Supplier:{supplier}</p>
            <p>description:{description.slice(0,60)}</p>
          
           </div>
           <Button className='updateBtn'>Update</Button>
           
            
    
        </div>
    );
};

export default ShowInventory;