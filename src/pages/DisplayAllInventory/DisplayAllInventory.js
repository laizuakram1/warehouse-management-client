import React from 'react';
import './DisplayAllInventory.css';
import { Button } from 'react-bootstrap';


const DisplayAllInventory = ({ item }) => {
    const {_id,image, name, price, quantity, supplier, description,} = item;
console.log(_id)
    const handleDelete = ()=>{
        const proceed = window.confirm('are sure delete this product?');
        if(proceed){
           fetch(`http://localhost:5000/item/${_id}`,{
            method:'DELETE',

           })
           .then(res =>res.json())
            .then(data =>{
                console.log(data);
                window.location.reload(true)
            })
           
        }

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