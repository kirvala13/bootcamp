import React, { useState } from 'react'

function Submited() {
  const data = JSON.parse(localStorage.getItem("tech"));
  const personal = JSON.parse(localStorage.getItem("data"));
  const covidSituation = JSON.parse(localStorage.getItem("covid"));
  const insight = JSON.parse(localStorage.getItem("insight"));
  console.log(covidSituation.covidData)
  const postData ={
    "token": "ef414f7b-ffe1-42c4-97dc-73533f939a28",
   "first_name": personal.name,
   "last_name": personal.lastName,
   "email": personal.email,
   "phone": personal.number,
   "skills": data,
   "work_preference": covidSituation.workPlace,
   "had_covid": covidSituation.Contact,
   "had_covid_at": covidSituation.covidData.covidData,
   "vaccinated": covidSituation.vaccined,
   "vaccinated_at": covidSituation.lastVaccine.vaccinedDate,
   "will_organize_devtalk": insight.organizedevtTalk,
   "devtalk_topic": insight.devtalk_topic,
   "something_special": insight.somethingSpecial
  }
  console.log(postData)
  return  (
    <div>Submited</div>
  )
}

export default Submited