import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Submited.css"
function Index({ data }) {

  const postMethodClick = (e) => {
    e.preventDefault()
    axios.post("https://bootcamp-2022.devtest.ge/api/application",data,{
      headers:{
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    })
      .then(res => console.log(res))
      .catch(err=>{
        console.log(err)
      })
  }
  return (
    <div className='submited'>
      <form onSubmit={postMethodClick}>
      <Link to="thanks"><button className='submited-button' type="submit">Submit</button></Link>
      </form>
      <Link to="4">go back</Link>
    </div>
  )
}

export default Index