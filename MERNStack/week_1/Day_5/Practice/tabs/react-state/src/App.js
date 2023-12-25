import { useState } from 'react'
import './App.css'
import Box from './'

function App() {
  const [color, setColor] = useState("")
  const [number,setNumber] = useState(0)
  const [profile,setProfile] = useState([{"color":"","number":0}])
  const change = (e)=> {
    e.preventDefault();
    console.log(profile)
    const newProfile = {color,number}
    setProfile([...profile,newProfile])
    setColor('black')
    setNumber(0)
  }

  return (
    <>
      <fieldset>
        <form onSubmit={change}>
          <label>Color</label>
          <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
          <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
          <button>Change</button>
        </form>
      </fieldset>
      {profile.map((element,idx) => <Box profiles={element} key={idx}/>)}
      
    </>
  )
}

export default App