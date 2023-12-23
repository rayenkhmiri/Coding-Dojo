import React from 'react'
import { useState } from 'react'




const Form = (props) => {
const [firstname , setfirstName] = useState("");
const [lastname , setLastName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [confirmpassword , setConfirmPassword] = useState("");




const validateFirstname = (input) => {
    setfirstName(input)
    console.log(input)
};

const validateLastname = (input) => {
    setLastName(input)

};

const validateEmail = (input) => {
    setEmail(input)
};

const validatePassword = (input) => {
    setPassword(input)
    }

const validateConfirmpassword =  (input) => {
    console.log(password+"*"+confirmpassword);
    setConfirmPassword(input)
};


const userCreat = (e) => {
    e.preventDefault();
    const newUser = { firstname,lastname, email, password,confirmpassword };
    console.log("Welcome", newUser);
    setfirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
};

    return (
    <div>
            <form onSubmit={userCreat}>
                <div>
                    <h4>First Name</h4>
                <div>
                <label></label>
                <input type="text" placeholder='First Name' onChange={(e)=>{validateFirstname(e.target.value);}} value={firstname} />
                <br />
                </div>
                </div>
                <div>
                    <h4>Last Name</h4>
                <div>
                <label></label>
                <input type="text"placeholder='Last Name' onChange={(e)=> {validateLastname(e.target.value);}} value={lastname} />
                <br />
                </div>
                </div>
                <div>
                    <h4>Email :</h4>
                <div>
                <label></label>
                <input type="email"placeholder='Email' onChange={(e)=> {validateEmail(e.target.value);}}value={email} />
                <br />
                </div>
                </div>
                <div>
                    <h4>Password:</h4>
                <div>
                <label></label>
                <input type="Password"placeholder='Password' onChange={(e)=>{validatePassword(e.target.value);}}value={password} />
                <br />
                </div>
                </div>
                <div>
                    <h4>Confirm Password :</h4>
                <div>
                <label></label>
                <input type="password"placeholder='Confirm Password' onChange={(e)=> {setConfirmPassword(e.target.value); validateConfirmpassword(e.target.value);}}value={confirmpassword} />
                <br />
                </div>
                </div>
                <br />
                <button type='submit' value={"Create User"}>
                    Submit
                </button>
            </form>
            <br />
            <div>
                <h1>Your Form Data</h1>
            <p>First Name : {firstname}</p>
            <p>Last Name : {lastname}</p>
            <p>Email : {email}</p>
            <p>Password</p>
            <p>Confirm Password</p>
            </div>
    </div>
)
}

export default Form ;
