import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon/");

  const fetchPokemon = () => {
    axios.get(nextPage)
      .then((response) => {
        const { data } = response;
        setNextPage(data.next);
        setPokemonList((prevList) => [...prevList, ...data.results]);
      })
      .catch((error) => console.error("Error fetching Pokemon:", error));
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((Pokemon) => (
            <tr key={Pokemon.name}>
              <td>{Pokemon.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;