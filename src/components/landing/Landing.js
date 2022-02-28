import React from 'react'
import { Link } from 'react-router-dom'
import "./Landing.css"
import rocketman from "../../assets/rocketman.png"
function Landing() {
  return (
    <div className='landing-page'>
      <h1>Welcome Rocketeer!</h1>
      <Link to="1" className='start-questionari'>Start Questionnaire</Link>
      <Link to="submited" className='submited-show'>Submited Applications</Link>
      <div className='character'>
        <img src={rocketman}/>
      </div>
    </div>
  )
}

export default Landing