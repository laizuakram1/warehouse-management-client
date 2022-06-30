import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DisplayAllInventory from '../DisplayAllInventory/DisplayAllInventory';
import Header from '../shared/Header/Header';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <h2 className='manageInventory-title text-center p-4'>Manage All Inventories</h2>
           <p className='add-new'><Link to='/addNew'>+Add New Items</Link></p>
            <div className='container inventory-container'>
            
                {
                    items.map(data => <DisplayAllInventory
                        key={data._id}
                        item={data}
                    ></DisplayAllInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;