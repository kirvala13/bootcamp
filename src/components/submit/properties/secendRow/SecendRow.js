import React from 'react'
import "./SecendRow.css"
import calendar from "../../../../assets/calendar.png"
function SecendRow({ data }) {

  return (
    <div className='row2'>
      <div className='covid-situation'>
        <h1>Covid Situation</h1>
        <div className='covid-situation__describ'>
          <h4>how would you prefer to work?</h4>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.work_preference === "from_office" ? "checked" : ""}`}></span> <span>From Sairme Office</span>
            </div>
          </div>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.work_preference === "from_home" ? "checked" : ""}`}></span> <span>From Home</span>
            </div>
          </div>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.work_preference === "hybrid" ? "checked" : ""}`} ></span> <span>hybrid</span>
            </div>
          </div>
        </div>
        <div className='covid-situation__describ'>
          <h4>Did you have covid 19?</h4>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.had_covid === true ? "checked" : ""}`}></span> <span>yes</span>
            </div>
          </div>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.had_covid === false ? "checked" : ""}`}></span> <span>no</span>
            </div>
          </div>
        </div>
        {data.had_covid === true ? <div className='covid-situation__describ'>
          <h4>When did you have covid 19?</h4>
          <div className='calendar'>{data.had_covid_at} <img src={calendar} /></div>
        </div>:null
        }
        <div className='covid-situation__describ'>
          <h4>Have you been vaccinated?</h4>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.vaccinated === true ? "checked" : ""}`}></span> <span>yes</span>
            </div>
          </div>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.vaccinated === false ? "checked" : ""}`}></span> <span>no</span>
            </div>
          </div>
        </div>
       {data.vaccinated===true? <div className='covid-situation__describ'>
          <h4>When did you have covid 19?</h4>
          <div className='calendar'>{data.vaccinated_at} <img src={calendar} /></div>
        </div>
        :null}
      </div>
      <div className='insight'>
        <h1>Insigts</h1>
        <div className='devtalk'>
          <h4 className='devtalk__h4'>Would you attend Devtalks and maybe also organize your own?</h4>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.will_organize_devtalk === true ? "checked" : ""}`}></span> <span>yes</span>
            </div>
          </div>
          <div className='situation-list'>
            <div className='label'>
              <span className={`button ${data.will_organize_devtalk === false ? "checked" : ""}`}></span> <span>no</span>
            </div>
          </div>
        </div>
        <div className='about-devtalk'>
          <h4 className='devtalk__h4'>What would you speak about at Devtalk?</h4>
          <div className='devtalk-speak'>{data.devtalk_topic}</div>
        </div>
        <div className='about-devtalk'>
          <h4 className='devtalk__h4'>Tell us somthing special</h4>
          <div className='devtalk-speak'>{data.something_special}</div>
        </div>
      </div>
    </div>
  )
}

export default SecendRow