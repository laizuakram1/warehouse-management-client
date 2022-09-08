import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm, } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [equipment, setEquipment] = useState([]);
    const {name, image, description, price, quantity, supplier} = equipment;
    
    // const { image, name, price, quantity, supplier, description} = equipment;
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    

    useEffect(() => {
        fetch(`http://localhost:5000/equipment/${id}`)
            .then(res => res.json())
            .then(data => {
                setEquipment(data)
            })
    }, [id])


    const handleDelivered = ()=>{
        const url = `http://localhost:5000/quantity/${id}`;

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(equipment)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            
        })
    }

   

    // update product quantity
    const onSubmit = data => {

        const url = `http://localhost:5000/product/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                

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

export default UpdateProduct;