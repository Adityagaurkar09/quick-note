import React, { useState } from 'react'
import './Add.css'
import Homebutton from '../../component/homebutton/homebutton'

function Add() {
  const [title , setTitle] = useState("")
  return (
    <div>
    <h1 className='text-center text-primary'>Add Note</h1>

    <input
     type='text'
     value={title}
     onChange={(e)=>{
     setTitle(e.target.value)
     }}/>

    {title}

    <button type="button" onClick={()=>{
      setTitle("");
    }}>clear</button>

    
<Homebutton/>
    </div>
  )
}

export default Add