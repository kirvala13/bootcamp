import React, { useRef, useState } from 'react'
import "./Covid.css"
import previus from "../../assets/Previous.png"
import next from "../../assets/Next.png"
import { Link } from 'react-router-dom'
function Covid() {
  const [workPlace, setWorkPlace] = useState("")
  const [covidContact, setCovidContact] = useState('')
  const [covid, setCovidDate] = useState('')
  const [vaccined, setVaccined] = useState("")
  const [lastVaccine, setLastVaccine] = useState('')

  
 
  const covidAnswerCLick=()=>{
    const covidObj={
      workPlace:workPlace,
      Contact:covidContact,
      covidData:covid,
      vaccined:vaccined,
      lastVaccine:lastVaccine
    }
    
    localStorage.setItem('covid', JSON.stringify(covidObj))
  }
  return (
    <div className='personal__container covid'>
      <div className='cordinates-container'>
        <h1>Covid Stuff</h1>
        <div className='Covid-form'>
          <form>
            <div className='work-prefer'>
              <h1 className='question_h1'>how would you prefer to work?</h1>
              <label>
                <input type="radio" value="from_office" name='value' onChange={(e) => setWorkPlace(e.target.value)} />
                From Sairme Office
              </label>
              <label>
                <input type="radio" value="from_offise" name='value' onChange={(e) => setWorkPlace(e.target.value)} />
                From Home
              </label>
              <label>
                <input type="radio" value="Hybrid" name='value' onChange={(e) => setWorkPlace(e.target.value)} />
                Hybrid
              </label>
            </div>
          </form>

          <div className='contact-covid'>
            <form>
              <div className='contact'>
                <h1 className='question_h1'>Did you contact covid 19? :(</h1>
                <label>
                  <input type="radio" value="true" name='value' onChange={(e) => setCovidContact(e.target.value)} />
                  yes
                </label>
                <label>
                  <input type="radio" value="false" name='value' onChange={(e) => setCovidContact(e.target.value)} />
                  no
                </label>
              </div>
            </form>
            <form>
              <div className='when'>
                <h1 className='question_h1'>When?</h1>
                <input type="date" name="covidDate" onChange={(e)=>setCovidDate({...covid,[e.target.name]:e.target.value})} />
              </div>
            </form>
            <form>
              <div className='vaccined'>
                <h1 className='question_h1'>Have you been vaccinated?</h1>
                <label>
                  <input type="radio" value="true" name='value' onChange={(e) => setVaccined(e.target.value)}/>
                  yes
                </label>
                <label>
                  <input type="radio" value="false" name='value' onChange={(e) => setVaccined(e.target.value)} />
                  no
                </label>
              </div>
            </form>
            <form>
              <div className='vaccined-date'>
                <h1 className='question_h1'>When did you get your last covid vaccine?</h1>
                <input type="date" name="vaccinedDate" onChange={(e)=>setLastVaccine({...lastVaccine,[e.target.name]:e.target.value})}/>
              </div>
            </form>

            <div className='pagination'>
              <Link to="2"><img src={previus} /></Link>
              <Link to="1"><div className='first-page' alt="prevbtn"></div></Link>
              <Link to="2"><div className='first-page' alt="prevbtn"></div></Link>
              <div className='first-page'></div>
              <div></div>
              <div></div>
              <Link to="4" onClick={covidAnswerCLick}><img src={next} alt="nextbtn" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='origins-container non-height'>
        <h1>Redberry Covid Policies</h1>
        <p>As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications {">"} Zoom meetings. Both on the fun and productivity scales. </p>
      </div>
    </div>
  )
}

export default Covid