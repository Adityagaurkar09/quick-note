import React, { useEffect, useState  } from 'react'
import './Show.css'
import Homebutton from '../../component/homebutton/homebutton'
import NoteCard from '../../component/NoteCard/NoteCard'

function Show() {
  const [ notes , setNotes] = useState([]);
  useEffect (()=>{
  const saveNotes = JSON.parse(localStorage.getItem("notes")) || [];
  setNotes(saveNotes)
  },[]);
  return (
    <div>
    <h1 className='text-center text-primary'>Show Note</h1>

    <div className='notes-container'>
    {
      notes.map((note)=>{
        const {title,description,category,emoji} = note;

        return(
          <NoteCard title={title} description={description} category={category} emoji={emoji}/>
        )
      })
    }
    </div>

    <Homebutton/>
    </div>
  )
}

export default Show