// import React from 'react'

// const Create = () => {
//   return (
//     <div>Create</div>
//   )
// }

// export default Create

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const Form = () => {
    const [product, setProduct] = useState([])
    const [form, setForm] = useState({
        title: '',
        price: 0,
        description: '',
    });
    console.log(form)
    console.log(product)
    const handleForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8001/api/new", form).then(response => {
            console.log(response.data);
            setProduct(response.data)
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <div className='container'>
                <form onSubmit={handleForm}>
                    <label htmlFor="title">
                        Title :
                    </label>
                    <input type="text" name='title' value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                    <label htmlFor="price">
                        Price :
                    </label>
                    <input type="number" name='price' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                    <label htmlFor="description">
                        Description :
                    </label>
                    <input type="text" name='description' value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    <button>CREATE</button>
                </form>
        </div>
    )
}

export default Form