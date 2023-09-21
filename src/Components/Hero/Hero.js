import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='heroContainer'>
        <h1>Welcome to <span className='cursiveText' style={{whiteSpace: "nowrap", animation: "typing 2s infinite"}}>Tanzeel ki Diary</span></h1>
        <p>The maker of this website and all the poetry is written by <span className='cursiveText'>Tanzeel</span></p>
    </div>
  )
}

export default Hero