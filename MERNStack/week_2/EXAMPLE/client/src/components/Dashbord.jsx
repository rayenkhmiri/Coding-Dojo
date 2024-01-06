import axios from "axios";
import {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";


const Dashbord = () => {
    // notes state
    const [notes,setNotes] = useState([]);
    // fetch all notes

    useEffect(() =>{
        axios
        .get("http://localhost:8000/api/notes")
        .then((res) =>{ 
            setNotes(res.data);
        })
        .catch((err) => console.log(err));

    },[]);

    // USENavigate
    const nav = useNavigate();

    // go to edit page 
    const goToEditPage = (id) => {
        nav(`/notes/${id}/edit`)
    }

    // delete note
    const deleteNote = (id) =>{
        // console.log(id);
        axios
        .delete(`http://localhost:8000/api/notes/${id}`)
        .then(res =>{
            console.log(res.data);
            const filteredNotes = notes.filter((eachElement) =>{
                return eachElement._id != id ;
            });
            setNotes(filteredNotes);
        })
        .catch((err) =>console.log(err));
    };

    return (
    <div>
        {notes.map((OneNote)=> {
            return(
                <div>
                    <Link to={`/notes/${OneNote._id}`}>
                    <h2>{OneNote.title}</h2>
                    </Link>
                    <p>{OneNote.content}</p>
                    <p>{OneNote.createdAt}</p>
                    <button onClick={()=> goToEditPage(OneNote._id)}>Edit</button>
                    <button onClick={()=> deleteNote(OneNote._id)}>Delete</button>

                </div>
                
            )
        })}
    </div>
    )
};

export default Dashbord;