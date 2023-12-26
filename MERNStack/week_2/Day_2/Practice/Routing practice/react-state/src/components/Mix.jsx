import React from 'react'
import { useParams } from 'react-router-dom'



const Mix = () => {
    const {Mix,text,background}= useParams();
    console.log(text)
    return (
        <div style={{backgroundColor:`${background}`}}>
            <p style={{Color:`${text}`}}>The Word is  : {Mix} </p>
        </div>
    )
}

export default Mix