import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Technical.css"
import previus from "../../assets/Previous.png"
import next from "../../assets/Next.png"
import { Link } from 'react-router-dom'
import removeImg from "../../assets/Remove.png"
function Technical() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('')
  const [language, setLanguage] = useState("")

  if (localStorage.getItem("tech") === null) {
    localStorage.setItem("tech", "[]")
  }

  const TechClick = (e, i) => {
    const newObj = {
      experience: experience,
      language: language
    }
    const tech = newObj;
    const techdata = JSON.parse(localStorage.getItem("tech"))
    techdata.push(tech)
    localStorage.setItem('tech', JSON.stringify(techdata))
    window.location.reload()
  }
  const technicalList = JSON.parse(localStorage.getItem("tech"))
  const deleteSkill = (index) => {
    window.location.reload()
    const splic = technicalList.splice(index, 1)
    localStorage.setItem('tech', JSON.stringify(technicalList))
  }
  useEffect(() => {
    axios.get("https://bootcamp-2022.devtest.ge/api/skills")
      .then(res => {
        setSkills(res.data)
      })
  }, [])
  return (
    <div className='personal__container'>
      <div className='cordinates-container'>
        <h1>Tell us about your skills</h1>
        <select className="skills" onChange={(e) => setLanguage(e.target.value)}>
          <option value="skills">skills</option>
          {skills.map(res => {
            return <option key={res.id} value={res.title}>{res.title}</option>
          })}
        </select>
        <input type="text" placeholder='Experience Duration in Years' onChange={(e) => setExperience(e.target.value)} />
        <div className='add-programming__language' onClick={TechClick}>Add Programming Languages</div>
        <div className='skills-table'>
          {
            technicalList.map((res, index) => {
              return <div key={index} className='technical__list'>
                <p>{res.language}</p> <p>{`Years of Experiance: ${res.experience}`}</p> <img onClick={() => deleteSkill(index)} src={removeImg} />
              </div>
            })
          }
        </div>
      </div>
      <div className='pagination'>
        <Link to="1"><img src={previus} /></Link>
        <Link to="1"><div className='first-page' alt="prevbtn"></div></Link>
        <div className='first-page'></div>
        <div></div>
        <div></div>
        <div></div>
        <Link to="3" ><img src={next} alt="nextbtn" /></Link>
      </div>
      <div className='origins-container'>
        <h1>A bit about our battles</h1>
        <p>As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.</p>
      </div>
    </div>
  )
}

export default Technical