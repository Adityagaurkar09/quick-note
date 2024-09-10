import React from 'react'
import "./homebutton.css"
import imgHome from './../../asset/home.png'
import { Link } from 'react-router-dom'

function homebutton() {
  return (
    <Link to="/">
    <img src={imgHome} alt="home" className='home-img'/>
    </Link>
  )
}

export default homebutton