import React from 'react'
import "./Personal.css"
import previus from "../../assets/Previous.png"
import next from "../../assets/Next.png"
import { Link } from 'react-router-dom'
function Personal() {
  return (
    <div className='personal__container'>
      <div className='cordinates-container'>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <form className='personal-form__container'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
          <input type="mail" placeholder='E-Mail' />
          <input type="number" placeholder='+995 5_ _ _ _ _' />
          <div className='pagination'>
           <Link to="/"><img src={previus}/></Link>
            <div className='first-page' alt="prevbtn"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
           <Link to="2"><img src={next} alt="nextbtn"/></Link>
          </div>
        </form>
      </div>
      <div className='origins-container'></div>
    </div>
  )
}

export default Personal


