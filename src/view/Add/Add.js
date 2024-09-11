import React, { useState } from 'react'
import './Add.css'
import Homebutton from '../../component/homebutton/homebutton'
import EmojiPicker from 'emoji-picker-react';

function Add() {
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");
  const [category , setCategory] = useState("");
  const [emoji , setEmoji] = useState("");
  const [openEmojiDialoge , setOpenEmojiDialoge] = useState(false)
  return (
    <div>
    <h1 className='text-center text-primary'>Add Note</h1>

    <input className='input-btn'
     type='text'
     placeholder='title'
     value={title}
     onChange={(e)=>{
     setTitle(e.target.value)
     }}/>
     
     <input className='input-btn'
     type='text'
      placeholder='description'
     value={description}
     onChange={(e)=>{
      setDescription(e.target.value)
     }}/>

<select value={category} className='input-btn option-btn' onChange={(e)=> setCategory(e.target.value)}>
      <option value="work">Work</option>
      <option value="personal work">Personal Work</option>
      <option value="playing">Playing</option>
      <option value="learning">Learning</option>
      <option value="shoping">Shoping</option>
     </select>

<EmojiPicker 
open ={openEmojiDialoge} 
height={"300px"}
width={"400px"}
onEmojiClick={(emojiObject)=>{
 setEmoji(emojiObject.emoji)
 setOpenEmojiDialoge(false)
}}
className='emoji-picker'
/>

<div className='input-btn emoji-container'onClick={()=>setOpenEmojiDialoge(true)}>
{emoji ? emoji : "select Emoji"}

</div>
    {title}

    <button type="button" className='btn-primary text-heilight addd-btn'
     onClick={()=>{
      console.log("title",title)
      console.log("description",description)
      console.log("category",category)
      console.log("emoji",emoji)
    }}>
      + ADD NOTE</button>




<Homebutton/>
    </div>
  )
}

export default Add