import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const deleted = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}/delete`)
    .then(response => {
      console.log(response);
      setData(data.filter(author => author._id !== id));
    })
    .catch(error => {
      console.log(error);
    });
  };

  const edited = (_id,named) => {
    navigate(`/authors/${_id}/edit`);
  };

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/authors/new">Add an Author</Link>
      <h2>We Have Quotes By:</h2>
      <table>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {data.map((author, idx) => (
            <tr key={idx}>
              <td>{author.name}</td>
              <td>
                <button onClick={() => edited(author._id,author.name)}>Edit</button>
                <button onClick={() => deleted(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;