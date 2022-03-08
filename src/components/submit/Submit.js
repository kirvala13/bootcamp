import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import FirstRow from './properties/FirstRow/FirstRow'
import SecendRow from './properties/secendRow/SecendRow'
import "./Submit.css"
function Submit() {
  const [getData, setGetData] = useState([])
  const [openItems, setOpenItems] = useState([])
  const refer = useRef()
  const changeHeight = (index) => {
   if(openItems.includes(index)){
    setOpenItems( openItems.filter((item)=> item!=index))
   }else{
     const newItems= [...openItems,index]
     setOpenItems(newItems)
   }
  }

  useEffect(() => {
    axios.get("https://bootcamp-2022.devtest.ge/api/applications?token=ef414f7b-ffe1-42c4-97dc-73533f939a28")
      .then(res => {
        setGetData(res.data)
      })
  }, [])
  return (
    <div className='submited-container'>
      <h1 className='submited-container__h1'>Submitted Applications</h1>
      {getData.map((res, i) => {
        return (
          <div onClick={() => changeHeight(i)} className="blaa" key={i}>
            <div className='header__submit'>
              <span>{i}</span><span>V</span>
            </div>
            <div className={`list-submit ${openItems.includes(i)?"height":""}`}  >
              <FirstRow data={res}/>
              <SecendRow data={res}/>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Submit