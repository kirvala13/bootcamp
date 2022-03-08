import React, { useEffect, useState } from 'react'
import "./Insight.css"
import previus from "../../assets/Previous.png"
import next from "../../assets/Next.png"
import { Link } from 'react-router-dom'
function Insight() {
  const[organize,setOrganize]=useState(false);
  const[firstText,setFirstText]=useState('');
  const[secondText,setSecendText]=useState('')
  const[radioButton,setRadioButton]=useState(false)
  const[text,setText]=useState(false)
  const[secText,setSecText]=useState(false)
 const insightClick=()=>{
   const insightObj= {
     organizedevtTalk:organize,
     devtalk_topic:firstText,
     somethingSpecial:secondText,
   }
   localStorage.setItem("insight",JSON.stringify(insightObj))
 }
 useEffect(()=>{
  if(organize===false){
    setRadioButton(true)
  }else{
    setRadioButton(false)
  }
  if(firstText.length<=5){
    setText(true)
  }else{
    setText(false)
  }
  if(secondText.length<=5){
    setSecText(true)
  }else{
    setSecText(false)
  }
  console.log(text)
 },[organize,firstText,secondText])
  return (
    <div className='personal__container covid'>
      <div className='cordinates-container insight'>
        <h1>What about you?</h1>
        <div className='radio-Question'>
          <h4 className='question-insight'>Would you attend Devtalks and maybe also organize your own?</h4>
          <form>
            <label>
              <input type="radio" name="name" value="true" onChange={(e)=> setOrganize(true)} />
              Yes
            </label>
            <label>
              <input type="radio" name="name" value="false" onChange={(e)=> setOrganize(false)}/>
              No
            </label>
          </form>
        </div>
        <div className='input-question'>
          <h4 className='question-insight'>What would you speak about at Devtalk?</h4>
            <form>
              <input type="text"  className='insight-question__text' placeholder='I would...' onChange={(e)=> setFirstText(e.target.value)}/>
            </form>
        </div>
        <div className='input-question'>
          <h4 className='question-insight'>Tell us something special</h4>
            <form>
              <input type="text"  className='insight-question__text' placeholder='I would...' onChange={(e)=> setSecendText(e.target.value)}/>
            </form>
        </div>
        
        <div className='pagination'>
              <Link to="3"><img src={previus} /></Link>
              <Link to="1"><div className='first-page' alt="prevbtn"></div></Link>
              <Link to="2"><div className='first-page' alt="prevbtn"></div></Link>
              <Link to="3"><div className='first-page' alt="prevbtn"></div></Link>
              <div className='first-page'></div>
              <div></div>
           {radioButton || text || secText? <Link to="4" onClick={()=>alert('Please fill in all the details')}><img src={next} alt="nextbtn" /></Link>: <Link to="submited" onClick={insightClick}><img src={next} alt="nextbtn" /></Link>}  
            </div>
      </div>
      <div className='origins-container'>
        <h1>Redberrian Insights</h1>
        <p>We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!</p>
      </div>
    </div>
  )
}

export default Insight