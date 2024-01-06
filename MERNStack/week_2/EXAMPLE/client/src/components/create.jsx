import React, {useState} from 'react'
import axios from 'axios';


const Create = () => {

  //  inputs state
  const [title,setTitle]= useState("");
  const [Content,setContent]= useState("");
  const [isImportant,setIsImportante]= useState(false);
  // handle form submit
  const submitHandler = (e) =>{

    e.preventDefault();
    const tempNote = {
      title,
      Content,
      isImportant,
    };
    //  save the note to db 
    axios.post("http://localhost:8000/api/notes" , tempNote)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err))
  };
    
  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>{JSON.stringify(title)}</p>
        <p>{JSON.stringify(Content)}</p>
        <p>{JSON.stringify(isImportant)}</p>
        <div>
          <label>Title :</label>
          <input onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </div>
        <div>
          <label>Content:</label>
          <textarea onChange={(e) => setContent(e.target.value)} value={Content}></textarea>
        </div>
        <div>
          <label>Important:</label>
          <input name="checkbox" onChange={(e)=>setIsImportante(e.target.checked)} checked={isImportant} />
        </div>
      </form>
    </div>
  )
}

export default Create