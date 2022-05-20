import React, { useState, useEffect } from 'react';
import DisplayAllInventory from '../DisplayAllInventory/DisplayAllInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h2 className='text-center p-4'>Manage All Inventories</h2>
            <div className='container inventory-container'>
                {
                    items.map(data => <DisplayAllInventory
                        key={data.id}
                        item={data}
                    ></DisplayAllInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;