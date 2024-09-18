import React from 'react'
import "./NoteCard.css"
import imgDelet from "./delete.png"


function titleCase (str) {
return(
  str[0].toUpperCase() + str.slice(1)
)}

function deletNote (index){
  const savedNote = JSON.parse(localStorage.getItem("notes")) || [];
  savedNote.splice(index, 1);
  localStorage.setItem("notes",JSON.stringify(savedNote));
  window.location.reload ();
}


function NoteCategory ({category}){

  const CATEGORY_EMOJI = {
    
    "work":"🧑‍💻",
    "shoping":"🛍️",
    "health":"🏋️",
    "learning":"📓",
    "playing":"🤾🏻"

  }
  return(
    
    <div className={`category bg-${category}`}>
     <span className='emojicategory'>{CATEGORY_EMOJI[category]}</span>
      { titleCase(category)}
      </div>
  )
}

function NoteCard({index,title,description,category,emoji}) {
  return (
    <div className='note-container '>
  <div className='emoji'>{emoji}</div>
  <div>
   <h2 className='title'>{title} </h2>
    <p className='description'>{description}</p>

    <NoteCategory category={category} />
   <img src={imgDelet} 
   className='delet'
    alt='delet'
    onClick={()=>{
      deletNote(index);
    }}
   />
  </div>
    </div>
  );
}

export default NoteCard