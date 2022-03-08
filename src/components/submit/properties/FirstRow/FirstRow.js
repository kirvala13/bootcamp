import React from 'react'
import "./FirtsRow.css"
function FirstRow({ data }) {
  return (
    <>
     
            <div className='row1'>
              <div className='personal-info'>
                <h1>Personal Information</h1>
                <div className='user-info'>
                  <div className='user__span'>
                    <span>First Name </span><span>{data.first_name}</span>
                  </div>
                </div>
                <div className='user-info'>
                  <div className='user__span'>
                    <span>Last Name </span><span>{data.last_name}</span>
                  </div>
                </div>
                <div className='user-info'>
                  <div className='user__span'>
                    <span>E Mail </span><span>{data.email}</span>
                  </div>
                </div>
                <div className='user-info'>
                  <div className='user__span'>
                    <span>Phone</span><span>{data.phone}</span>
                  </div>
                </div>
              </div>
     
              <div className='skillset'>
                <h1>Skillset</h1>
                <div className='user-info'>
                  <div className='user__span'>
                    {data.skills.map((res,i)=>  <div key={i}><span >{res.title}</span><span>Years of Experience: {res.experience}</span></div>)}
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default FirstRow