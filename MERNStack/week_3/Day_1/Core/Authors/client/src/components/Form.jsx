import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState,  } from 'react'

const Form = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const handleForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", data)
            .then(response => {
                console.log(response.data);
                navigate('/authors');
            })
            .catch(error => {
                console.log(error);
                const errorResponse = error.response.data; // Get the errors from err.response.data
                console.log(errorResponse,"error from Error");
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <fieldset>
                <form onSubmit={handleForm}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                    <button type='Reset'>Cancel</button>
                    <button type='Submit'>Submit</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Form