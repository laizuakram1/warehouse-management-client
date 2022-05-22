import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";import { Link } from 'react-router-dom';
 import './AddNew.css';


const AddNew = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-center text-success mb-3'>Add New Product</h4>
                <input placeholder='Product Name' {...register("Name", { required: true, maxLength: 20 })} />
                <input placeholder='Image link ' {...register("image", { required: true, maxLength: 20 })} />
                <input placeholder='Price ' {...register("price", { required: true, maxLength: 20 })} />
                <input placeholder='Quantity' type="number" {...register("quantity", { min: 18, max: 99 })} />
                <input placeholder='Supplier Name ' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description ' {...register("description", { required: true, maxLength: 20 })} />
               
              
              
         <div className='text-center'>
         <Button className='AddBtn btn-success'>Add</Button>
         </div>
            </form>

        </div>
    );
};

export default AddNew;