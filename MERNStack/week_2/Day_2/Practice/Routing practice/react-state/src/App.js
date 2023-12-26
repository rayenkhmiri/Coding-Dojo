import React from 'react'
import './App.css'
import {Routes,Route,Navigate} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number'
import Mix from './components/Mix';


function App() {
    return (
    <>
    <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Navigate to={"/home"}/>}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/:Mix/:text/:background" element={<Mix />}/>
        </Routes>
    </>
    )
}

export default App