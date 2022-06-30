import { Toast } from 'bootstrap';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm, } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        const url = `http://localhost:5000/${id}`;
       
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        .then(res => res.json)
        .then(result => {
            Toast('input data updated')
            
        })

}


return (
    <div>

        <form className='addForm' onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-center text-success mb-3'>Update Product Quantity</h4>
            <input placeholder='Quantity' type="number" {...register("quantity")} />
           
            <div className='text-center'>
                <Button type='submit' className='AddBtn btn-success'>Update</Button>
            </div>
        </form>

    </div>
);
};

export default UpdateProduct; <h2>Update Product</h2>