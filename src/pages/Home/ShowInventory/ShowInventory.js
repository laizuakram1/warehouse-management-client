import { Button } from 'react-bootstrap';
import React from 'react';
import './ShowInventory.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';




const ShowInventory = ({item}) => {
    const {image, name, price, quantity, supplier, description, _id} = item;
   



    //add product to cart
    const addCart = ()=>{
        const url = `http://localhost:5000/addProduct`;

       fetch(url, {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        
        body: JSON.stringify(item)
       })
       .then(res => res.json())
       .then(data => {
        window.confirm('product add to cart')
       });
    }

   
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
            <div className='inventory-btn'>
                <Button onClick={addCart} className="btn btn-warning">Add Cart</Button>
            <Link className='UpdateBtn' to={`/update/${_id}`}><Button>Update</Button></Link>
            </div>
           
        </div>
    );
};

export default ShowInventory;