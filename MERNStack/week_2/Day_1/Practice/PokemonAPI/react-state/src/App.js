import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon/");

  const fetchPokemon = () => {
    fetch(nextPage)
      .then((response) => response.json())
      .then((data) => {
        setNextPage(data.next);
        setPokemonList((prevList) => [...prevList, ...data.results]);
      })
  };

  return (
    <div className="container">
      <button className="btn" onClick={fetchPokemon}>
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
            <ul key={Pokemon.name}>
              <li>{Pokemon.name}</li>
            </ul>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;