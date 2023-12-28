import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/home';
import People from './components/People';
import Planet from './components/Planet';


const API_BASE_URL = 'https://swapi.dev/api/';


const App = () => {
  const [resource, setResource] = useState('People');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [planets,setplanets]=useState({})


  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${API_BASE_URL}${resource}/${id}`);
  //     setData(response.data);
  //     setError(null);
  //   } catch (error) {
  //     setData(null);
  //     setError("404 (Not Found)");
  //   }
  // };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${resource}/${id}`);
      setData(response.data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Resource not found. Please enter a valid ID.");
      } else {
        setError("An error occurred while fetching data.");
      }
      setData(null);
    }
  };
  

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <nav>
        <ul>
          <li><Link style={{textDecoration: 'none'}} to="/">Home</Link></li>
          <li><Link style={{textDecoration: 'none'}} to={`/People/${id}`}>People</Link></li>
          <li><Link style={{textDecoration: 'none'}} to={`/planets/${id}`}>Planets</Link></li>
        </ul>
      </nav>
      <div>
        <div>
        <h3>👇👇👇</h3>
        <label>
          Search For:
          <select value={resource} onChange={(e) => setResource(e.target.value)}>
            <option value="People">People</option>
            <option value="planets">Planets</option>
          </select>
        </label>&nbsp;&nbsp;
        <label>
          ID:&nbsp;
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>&nbsp;
        <button onClick={fetchData}>Submit</button>
        </div>
      </div>
      <div>
        <h3>🍕👌👌</h3>
      {error && <div>{error}</div>}
      <Routes>
        <Route path="/People/:id" element={<People data={data} planets={planets}/>} />
        <Route path="/planets/:id" element={<Planet data={data} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;