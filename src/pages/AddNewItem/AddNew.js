
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Header from '../shared/Header/Header';
 import './AddNew.css';
 


const AddNew = () => {
   
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data)
    const url = `http://localhost:5000/product`

    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json)
    .then(result => {
        reset();
        window.location.reload(true)
        
    })
    
    }
  
    return (
        <div>
            <Header></Header>
            <form className='addForm' onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-center text-success mb-3'>Add New Product</h4>
                <input placeholder='Product Name' {...register("Name", { required: true })} />
                <input placeholder='Image link ' {...register("image", { required: true})} />
                 <input placeholder='Quantity' type="number" {...register("quantity")} />
                 <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Supplier Name ' {...register("supplier", { required: true})} />
                <textarea placeholder='Description ' {...register("description", { required: true})} />
               
              
              
         <div className='text-center'>
         <Button type='submit' className='AddBtn btn-success'>Add</Button>
         </div>
            </form>

        </div>
    );
};

export default AddNew;