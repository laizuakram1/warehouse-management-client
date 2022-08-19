import { Toast } from 'bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm, } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [equipment, setEquipment] = useState({});
    const { image, name, price, quantity, supplier, description, _id} = equipment;

    const { id } = useParams();
    const { register, handleSubmit } = useForm();

    // fetch product details
    useEffect(() => {
        fetch(`http://localhost:5000/equipment/${id}`)
            .then(res => res.json())
            .then(data => {
                setEquipment(data)
            })
    }, [id])


    // update product quantity
    const onSubmit = data => {

        const url = `https://pure-coast-15289.herokuapp.com/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json)
            .then(result => {
                Toast('input data updated')

            })

    }

    //delivered button onclick update quantity
    const handleDelivered = ()=>{
        const url = `http://localhost:5000/quantity/${id}`;

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(quantity)
        })
        .then(res =>res.json)
        .then(data =>{
            console.log(data)
        })
    }



    return (
        <div className='d-flex justify-content-evenly'>
            <div className='inventory-items mt-3'>
                <div>
                    <div className='text-center'>
                        <img src={image} alt="productImg" />
                    </div>
                    <p>Name:{name}</p>
                    <p className='fw-bold'>Price:${price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Supplier:{supplier}</p>
                    <p>description:{description}</p>

                </div>
                <div className='mt-3 text-center'>
                    <Button onClick={handleDelivered}>Delivered</Button>
                </div>
            </div>

            <div>
                <form className='addForm' onSubmit={handleSubmit(onSubmit)}>
                    <h4 className='text-center text-success mb-3'>Update Product Quantity</h4>
                    <input placeholder='Add Quantity' type="number" {...register("quantity")} />

                    <div className='text-center'>
                        <Button type='submit' className='AddBtn btn-success'>Update</Button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct; <h2>Update Product</h2>