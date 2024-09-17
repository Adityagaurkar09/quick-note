import React from 'react'
import "./NoteCard.css"

function titleCase (str) {
return(
  str[0].toUpperCase() + str.slice(1)
)
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

function NoteCard({title,description,category,emoji}) {
  return (
    <div className='note-container '>
  <div className='emoji'>{emoji}</div>
  <div>
   <h2 className='title'>{title} </h2>
    <p className='description'>{description}</p>

    <NoteCategory category={category} />
  </div>
    </div>
  );
}

export default NoteCard