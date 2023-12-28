import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const People = ({ data}) => {

    const [planet,setPlanet]=useState("")


    const hundleget=(data)=>{
        console.log("data=",data)
        axios(data).then(res=>{setPlanet(res.data.name);console.log("data",res.data.name);this.setState({loading:0});}).catch(err=>err)
        
    }

    console.log("hi",planet)
    return (
        <div className='center-content'>
            <h2>People</h2>
            {data && (
                <div>
                    {hundleget(data.homeworld)}
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    <p>Hair Color: {data.Hair_Color}</p>
                    <p>Skin Color:  {data.Skin_Color}</p>
                    {console.log("data=",data)}{console.log("ata=",data.homeworld)}

                    {data.homeworld && (
                        <p>
                            Homeworld: <Link to={`/planets/${extractIdFromUrl(data.homeworld)}`}>Homeworld</Link>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

const extractIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

export default People;