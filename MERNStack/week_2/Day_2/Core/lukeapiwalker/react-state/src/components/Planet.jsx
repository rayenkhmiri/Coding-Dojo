import React from 'react';
const Planet = ({ data }) => {
    return (
        <div>
            <h2>Planet</h2>
            {data && (
                <div>
                    <p>Name: {data.name}</p>
                    <p>Climate: {data.climate}</p>
                    <p>terrain: {data.terrain}</p>
                    <p>Surface water : {data.Surface_Water}</p>
                    <p>Population: {data.population}</p>
                </div>
            )}
        </div>
    );
};

export default Planet;