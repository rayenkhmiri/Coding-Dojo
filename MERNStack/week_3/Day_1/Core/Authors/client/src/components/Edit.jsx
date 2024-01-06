import React from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Edit = () =>{
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(data,"",loaded);
    useEffect(() => {
    axios
    .get(`http://localhost:8000/api/authors/${id}`)
    .then(resp => {
        console.log(resp,"from data get");
        setData(...data,resp.data);
        setLoaded(true);
    }).catch(error => {
        console.log(error);
    })
    }, [])
    const handleForm = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}/edit`, data)
        .then(response => {        
        console.log(response,"from data put");
        navigate('/')
        })
        .catch(error => {
        console.log(error);
        })
    }
return (
    <div>
        {loaded && <>
        <Link to="/">Home</Link>
        <fieldset>
            <form onSubmit={handleForm}>
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
        </>}

    </div>
    )
}

export default Edit
