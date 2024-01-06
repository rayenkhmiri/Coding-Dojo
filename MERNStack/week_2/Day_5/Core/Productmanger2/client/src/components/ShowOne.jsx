import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    //Notes State
    const [products, setProducts] = useState([]);
    //Fetch all notes
    useEffect(() => {
        axios.get(`http://localhost:8001/api/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    //Use Navigate
    const nav = useNavigate();
    //Go to edit page
    const goToEditPage = (id) => {
        nav(`/products/${id}/edit`)
    };
    //Delete one note by ID
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8001/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                const filteredProducts = products.filter((eachElement) => {
                    return eachElement._id != id
                });
                setProducts(filteredProducts)
            })
            .catch(((err) => console.log(err)))
    }
    return (
        <>
            {products.map(oneProduct => {
                // Convert the createdAt string to a Date object
                const createdAtDate = new Date(oneProduct.createdAt);
                // Format the date to display only the date portion
                const formattedDate = createdAtDate.toLocaleDateString();

                return (
                    <div>🫷</div>
                );
            })}
        </>
    );
};

export default Dashboard;