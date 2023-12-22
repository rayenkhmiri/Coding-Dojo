import React from "react";
import { useState } from "react";

const UserCard =({user})=>{
    let [age,setAge]=useState(user.age);
    return(
        <>
            
            <h1>{user.last_name}, {user.first_name}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {user.hair_color}</p>
            <button onClick={()=>{
                console.log(age);
                return setAge(age+1)}}>Birthday for {user.first_name} {user.last_name}</button>
        </>
    )
}
export default UserCard