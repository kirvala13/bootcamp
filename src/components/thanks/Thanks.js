import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import "./Thenks.css"
function Thanks() {
 const[red,setRed]=useState(false)
  setTimeout(()=>{
    setRed(true)
  },1000)
  return (
    <div className='thanks'>
      <h1>Thanks for Joining 😊</h1>
      {
        red?<Redirect to="/"/>:null
      }
    </div>
  )
}

export default Thanks