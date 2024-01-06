import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from "./components/Dashbord"
import Create from "./components/Create"
import ShowOne from "./components/ShowOne"

function App() {
  return (
    <div className="App">
      <h1>Product Manager </h1>
      <Routes>
        <Route path = "/" element = {<Navigate to="/products"/>}/>
        {/* READ ALL */}
        <Route path='/products' element={<Dashboard />}/>
        {/* CREATE NOTE */}
        <Route path='/products/create' element={<Create />}/>
        {/* READ ONE NOTE */}
        <Route path='/products/:id' element={<ShowOne />}/>
      </Routes>
    </div>
  );
}

export default App;
