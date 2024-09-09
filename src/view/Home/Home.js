import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
 <h1 className='text-center text-primary'>Quick-Note</h1>
 <p className='text-center text-secondary'>Your Pcket Friendly Toking App.
  <del>Never Forget Anyting Again !</del>
  <span className='text-heilight text-primary'> Remember Everything !</span>
 </p>
 <div className='button-container text-center'>
  <button  className='btn-primary'>ADD NOTE</button>
  <button  className='btn-primary'>SHOW NOTE</button>
 </div>
 </div>
  )
}

export default Home