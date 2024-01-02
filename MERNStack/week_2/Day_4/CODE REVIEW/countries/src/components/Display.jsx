import React,{useState} from 'react'


function Display(props){
    const[thisC,setThisC]=useState(props.country)
    return (
    <tr>
        <td>{props.country.independent?props.country.name.common:<s>{props.country.name.common}</s>}</td>
        <td><img src={props.country.flags.png} height={50}/></td>
        <td>
            <input type="checkbox" checked={props.country.independent} onChange={(e)=>{props.updateCountry(props.index);
                setThisC({name:{common:props.country.name.common},flags:{png:props.country.flags.png}})}}/>Independent
            <button onClick={(e)=>{props.deleteCountry(props.index)}} className='btn btn-danger'>Delete</button>
            </td>
    </tr>
    )
}

export default Display