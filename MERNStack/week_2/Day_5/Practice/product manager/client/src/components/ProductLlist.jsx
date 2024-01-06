import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const [prod, setProd] = useState(props.prod)
    console.log(props.id)
    return (
        <div>
            <Link to={`/products/${props.id}`} >{prod.description}</Link>
        </div>
    )
}

export default ProductList;