import React, { useEffect, useState } from 'react';
import './Inventory.css'
import ShowInventory from '../ShowInventory/ShowInventory';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setItems(data.slice(0,6)))
    }, [])
    return (
        <div>
            <h2 className='text-center mb-3'>Inventory items</h2>

            <div className='container inventory-container'>
                {
                    items.map(item => <ShowInventory
                        key={item._id}
                        item={item}
                    ></ShowInventory>)
                }
            </div>
        </div>
    );
};

export default Inventory;