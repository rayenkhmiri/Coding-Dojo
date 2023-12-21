import React from 'react'

const PersonCard = (props) => {
    const {user} = props
    return(
        <div >
            <div>
                <h1>{user.last_name}, {user.first_name}</h1>
                <p>Age: {user.age}</p>
                <p>Hair Color: {user.hairColor}</p>
            </div>
        </div>
    );


}

export default PersonCard;
