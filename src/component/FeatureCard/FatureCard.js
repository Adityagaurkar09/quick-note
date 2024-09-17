import React from 'react'
import './FeatureCard.css'

function FatureCard({FeatureImg,FeatureText}) {
  return (
    <div className='feature-card'>
    <img src={FeatureImg} className='feature-img' alt='secure'></img>
    <p className='feature-text text-center '>{FeatureText}</p>
   </div>
  )
}

export default FatureCard