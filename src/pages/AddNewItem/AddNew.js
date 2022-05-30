import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";import { Link } from 'react-router-dom';
import Header from '../shared/Header/Header';
 import './AddNew.css';



const AddNew = () => {
    const [data, setData] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setData(data)
    
    useEffect( () =>{
        fetch(`http://localhost:5000/product`)
        
    },[])
    
    
    
    return (
        <div>
            <Header></Header>
            <form className='addForm' onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-center text-success mb-3'>Add New Product</h4>
                <input placeholder='Product Name' {...register("Name", { required: true, maxLength: 20 })} />
                <input placeholder='Image link ' {...register("image", { required: true, maxLength: 20 })} />
                <input placeholder='Price ' {...register("price", { required: true, maxLength: 20 })} />
                <input placeholder='Quantity' type="number" {...register("quantity", { min: 18, max: 99 })} />
                <input placeholder='Supplier Name ' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description ' {...register("description", { required: true, maxLength: 20 })} />
               
              
              
         <div className='text-center'>
         <Button type='submit' className='AddBtn btn-success'>Add</Button>
         </div>
            </form>

        </div>
    );
};

export default AddNew;