import React, { useEffect, useState } from 'react'
import "./Personal.css"
import previus from "../../assets/Previous.png"
import next from "../../assets/Next.png"
import { Link } from 'react-router-dom'
function Personal() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [validName, setNameValid] = useState(true)
  const [validLastName, setLastNameValid] = useState(true)
  const [validEmail, setEmailValid] = useState(true)
 const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const sentObj = {
    name: name,
    lastName: lastName,
    email: email,
    number: number
  }
  const emailValue=(e)=>{
    setEmail(e.target.value)
    if(!emailRegex.test(email)){
      setEmailValid(true)
    }else{
      setEmailValid(false)
    }
  }
  const nameValue=(e)=>{
    setName(e.target.value)
    if (name.length<=2) {
      setNameValid(true)
    } else {
      setNameValid(false)
    }
  }
  const lastNameValue=(e)=>{
    setLastName(e.target.value)
    if (lastName.length<=2) {
     setLastNameValid(true)
    } else {
      setLastNameValid(false)
    }
  }
  const saveClick = () => {
    localStorage.setItem('data', JSON.stringify(sentObj))
  }

  return (
    <div className='personal__container '>
      <div className='cordinates-container '>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <form className='personal-form__container'>
          <input
            type="text"
            placeholder='First name'
            onChange={nameValue}
          />
          {validName?<div className='err'>*Not Valid name</div>:null}
          <input type="text"
            placeholder='Last name'
            onChange={lastNameValue}
          />
          {validLastName?<div className='err'>*Not Valid last name</div>:null}
          <input type="mail"
            placeholder='E-Mail'
            onChange={emailValue} />
            {validEmail?<div className='err'>*Not Valid Email</div>:null}
          <input type="number"
            placeholder='+995 5_ _ _ _ _'
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className='pagination'>
            <Link to="/"><img src={previus} /></Link>
            <div className='first-page' alt="prevbtn"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {validLastName ||validEmail ||validName    ? <Link><img src={next} alt="nextbtn" /></Link> : <Link to="2" onClick={saveClick}><img src={next} alt="nextbtn" /></Link>}
          </div>
        </form>
      </div>
      <div className='origins-container'>
        <h1>Redberry Origins</h1>
        <p>You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
      </div>
    </div>
  )
}

export default Personal


