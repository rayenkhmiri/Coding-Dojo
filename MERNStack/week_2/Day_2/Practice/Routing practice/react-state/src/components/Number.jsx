import React from 'react'
import { useParams } from 'react-router-dom'
const Number = () => {
    const {number} = useParams();
    console.log(number)
    return (
        <div>
            {isNaN(number)?<h1>The Word is {number}</h1>:<h1>The Number Is {number}</h1>}
        </div>
    )
}

export default Number