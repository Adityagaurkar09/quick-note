import React from 'react'
import './Home.css'
import imgSecure from "./secure.png"
import imgBrain from "./brain.png"
import heartImg from "./heart.png"
import FatureCard from '../../component/FeatureCard/FatureCard'
import { Link } from 'react-router-dom'

const FEATURE = [
  {
     FeatureImg:imgSecure,
      FeatureText :"Note Will Be Securly Stored In Local Browswe Storage"
  },
  {
    FeatureImg:imgBrain,
     FeatureText :"Use Your Brain For THinking , Not For Remembering Thing"
 },
 {
  FeatureImg:heartImg,
   FeatureText :" Loved By 100+ User. Feedback Are Always Welcome !"
}
]

function Home() {
  return (
    <div>
 <h1 className='text-center text-primary heading'>Quick-Note</h1>
 
<h2>
 <p className='text-center text-secondary'>Your Pcket Friendly Toking App.
  <del>Never Forget Anyting Again !</del>
  <span className='text-heilight text-primary'> Remember Everything !</span>
 </p>
 </h2>

 <div>

 <h2 className='text-center '>Why Should You Use Quick Note ? </h2>

 <div className='feature-container'>

{
  FEATURE.map((feature)=>{
    const {FeatureImg,FeatureText}=feature;
    return(
    <FatureCard
    FeatureImg={FeatureImg}
    FeatureText={FeatureText}
    />
  );
  })
}
 </div>

 </div>
 <div className='button-container text-center'>
  <Link to="/add">
  <button  className='btn-primary purple-color  bold-text'>ADD NOTE</button>
  </Link>
  <Link to="/show">
  <button  className='btn-primary text-heilight bold-text '>SHOW NOTE</button>
  </Link>
 </div>
 </div>
  )
}

export default Home