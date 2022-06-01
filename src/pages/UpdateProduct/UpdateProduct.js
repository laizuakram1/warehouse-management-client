import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    

    return (
        <div>
            <h4>update product</h4>
        </div>
    );
};

export default UpdateProduct;