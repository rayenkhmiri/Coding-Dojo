import './App.css';
import axios from 'axios' 
import{useState} from 'react'
import Display from './components/Display';


function App() {
  const [countries,setCountries]=useState([])
  const[newC,setNewC]=useState("")
  const[newF,setNewF]=useState("")

  const fetchCountries = () => {
    axios.get('https://restcountries.com/v3.1/all').then(response=>{
      console.log(response);
      setCountries(response.data)
    
  })}

  const addCountry = (value,flag) =>{
    setCountries([...countries,{name:{common:value},flags:{png:flag}}])

  }
  const handleInput = (e) =>{
    e.preventDefault();
    // if the ,,,empty rturn nothing 
    if (newC!=""){
    addCountry(newC,newF);
    setNewC("")
    setNewF("")}
  }

  const deleteCountry = (id) => {
    setCountries(countries.filter((c,i) => i!==id))
  }
  const updateCountry = (id) => {
    const newArr = countries
    newArr[id].independent = !newArr[id].independent

    setCountries(newArr)
  }


  return (
    <div className="App">
      <h1>Countries App</h1>
      <form onSubmit={(e)=>{handleInput(e)}}>
        Name : <input type="text" onChange={(e)=>{setNewC(e.target.value)}} value={newC}/>
        Flag : <input type="text" onChange={(e)=>{setNewC(e.target.value)}} value={newF} />
        <button className='btn btn-primary'>Add</button>
      </form>
      <button onClick={fetchCountries} className='btn btn-success'>Fetch Countries </button>
      <table className='table table-bordered'>
        <tr>
          <th>Country Name</th>
          <th>Flag</th>
          <th>Actions</th>
        </tr>
        {countries.map((country,index) =>{
          return <Display country={country} index={index} deleteCountry={deleteCountry} updateCountry={updateCountry}/>
        })}
      </table>

    </div>
  );
}

export default App;
