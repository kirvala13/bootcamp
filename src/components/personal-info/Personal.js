import React, { useEffect, useState } from 'react'
import "./Personal.css"
import previus from "../../assets/Previous.png"
import next from "../../assets/Next.png"
import { Link } from 'react-router-dom'
function Personal() {
  const[name,setName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[number,setNumber]=useState('')
  const[valid,setValid]=useState(false)

  const sentObj={
    name:name,
    lastName:lastName,
    email:email,
    number:number
  }
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", "[]")
  }
useEffect(()=>{
  if(name.length<=2 || lastName.length<=3){
    setValid(true)
  }else{
    setValid(false)
  }
},[name,lastName])
  const saveClick=()=>{
      const data=sentObj;
      const oldData = JSON.parse(localStorage.getItem("data"))
      oldData.push(data)
      localStorage.setItem('data', JSON.stringify(oldData))
  }

  return (
    <div className='personal__container'>
      <div className='cordinates-container'>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <form className='personal-form__container'>
          <input type="text" placeholder='First name' onChange={(e)=>setName(e.target.value)} />
          {valid?<div className='err'>*Not Valid Name</div>:null}
          <input type="text" placeholder='Last name' onChange={(e)=>setLastName(e.target.value)}/>
          {valid?<div className='err'>*Not Valid Last Name</div>:null}
          <input type="mail" placeholder='E-Mail' onChange={(e)=>setEmail(e.target.value)} />
          <input type="number" placeholder='+995 5_ _ _ _ _' onChange={(e)=>setNumber(e.target.value)}/>
          <div className='pagination'>
           <Link to="/"><img src={previus}/></Link>
            <div className='first-page' alt="prevbtn"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
           <Link to="2" onClick={saveClick}><img src={next} alt="nextbtn"/></Link>
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


