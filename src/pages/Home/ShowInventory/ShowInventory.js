import { Button } from 'react-bootstrap';
import React from 'react';
import './ShowInventory.css';
import { Link } from 'react-router-dom';

const ShowInventory = ({item}) => {
    const {image, name, price, quantity, supplier, description, _id} = item;

   
    return (
        <div className='inventory-items'>
           <div>
          <div className='text-center'>
          <img src={image} alt="productImg" />
          </div>
            <p>Name:{name}</p>
            <p className='fw-bold'>Price:${price}</p>
            <p>Quantity:{quantity}</p>
            <p>Supplier:{supplier}</p>
            <p>description:{description.slice(0,60)}</p>
           
           </div>
            <div className='mt-5'>
            <Link className='UpdateBtn' to={`/update/${_id}`}><Button>Update</Button></Link>
            </div>
        </div>
    );
};

export default ShowInventory;