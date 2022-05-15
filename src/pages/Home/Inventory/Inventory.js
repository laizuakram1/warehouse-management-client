import React, { useEffect, useState } from 'react';
import './Inventory.css'
import ShowInventory from '../ShowInventory/ShowInventory';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2>Inventory items</h2>

            <div className='container inventory-container'>
                {
                    items.map(item => <ShowInventory
                        key={item.id}
                        item={item}
                    ></ShowInventory>)
                }
            </div>
        </div>
    );
};

export default Inventory;