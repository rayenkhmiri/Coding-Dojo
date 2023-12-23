import React from 'react'
import { useState } from 'react'




const Form = (props) => {
const [firstname , setfirstName] = useState("");
const [lastname , setLastName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [confirmpassword , setConfirmPassword] = useState("");


const [firstnameError, setFirstnameError] = useState("");
const [lastnameError, setLastnameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmpasswordError, setConfirmpasswordError] = useState("");


const validateFirstname = (input) => {
    setfirstName(input)
    console.log(input)
    if (input === ""){
        setFirstnameError("");
    }else {
        if (input.length <2) {
            setFirstnameError("First Name must be at least 2 characters");
        } else {
            setFirstnameError("");
        }
    }
};

const validateLastname = (input) => {
    setLastName(input)
    if (input === ""){
        setLastnameError("")
    }else {
        if (input.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        } else {
            setLastnameError("");
        }
    }
};

const validateEmail = (input) => {
    setEmail(input)
    if (input === ""){
        setEmailError("")
    }else {
        if (email.length < 5) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }
};

const validatePassword = (input) => {
    setPassword(input)
    if (input === ""){
        setPasswordError ("")
    }else {
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };
    }

const validateConfirmpassword =  (input) => {
    console.log(password+"*"+confirmpassword);
    setConfirmPassword(input)
        if (password !== input) {
            setConfirmpasswordError("Passwords must match");
        } else {
            setConfirmpasswordError("");
        }
};


const userCreat = (e) => {
    e.preventDefault();
    const newUser = { firstname,lastname, email, password,confirmpassword };
    console.log("Welcome", newUser);
    setfirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
};

    return (
    <div>
        <div>
            <h4>Form</h4>
            <form onSubmit={userCreat}>
                <div>
                    <h4>First Name</h4>
                <div>
                <label></label>
                <input type="text" placeholder='First Name' onChange={(e)=>{validateFirstname(e.target.value);}} value={firstname} />
                <br />
                <span className='ERROR'>{firstnameError}</span>
                </div>
                </div>
                <div>
                    <h4>Last Name</h4>
                <div>
                <label></label>
                <input type="text"placeholder='Last Name' onChange={(e)=> {validateLastname(e.target.value);}} value={lastname} />
                <br />
                <span className='ERROR'>{lastnameError}</span>
                </div>
                </div>
                <div>
                    <h4>Email</h4>
                <div>
                <label></label>
                <input type="email"placeholder='Email' onChange={(e)=> {validateEmail(e.target.value);}}value={email} />
                <br />
                <span className='ERROR'>{emailError}</span>
                </div>
                </div>
                <div>
                    <h4>Password</h4>
                <div>
                <label></label>
                <input type="Password"placeholder='Password' onChange={(e)=>{validatePassword(e.target.value);}}value={password} />
                <br />
                <span className='ERROR'>{passwordError}</span>
                </div>
                </div>
                <div>
                    <h4>Confirm Password</h4>
                <div>
                <label></label>
                <input type="password"placeholder='Confirm Password' onChange={(e)=> {setConfirmPassword(e.target.value); validateConfirmpassword(e.target.value);}}value={confirmpassword} />
                <br />
                <span className='ERROR'>{confirmpasswordError}</span>
                </div>
                </div>
                <br />
                <button type='submit' value={"Create User"}>
                    Submit
                </button>
            </form>
            <br />
            <div>
                <h4>Your Form Data</h4>
            <p>First Name : {firstname}</p>
            <p>Last Name : {lastname}</p>
            <p>Email : {email}</p>
            <p>Password</p>
            <p>Confirm Password</p>
            </div>
        </div>
    </div>
  )
}

export default Form ;