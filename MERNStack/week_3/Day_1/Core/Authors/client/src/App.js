import { useState, } from 'react'
import {Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import Edit from './components/Edit'
function App() {
  const [data,setData] = useState({name:"",id:0});
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/authors"/>}/>
        <Route path="/authors" element={<Home data={data} setData={setData}/>}/>
        <Route path="/authors/new" element={<Form data={data} setData={setData}/>}/>
        <Route path="/authors/:id/edit" element={<Edit />}/>
      </Routes>
    </>
  )
}

export default App