import React from 'react'
import "./index.scss"

function FacultyMembersCards({image,name}) {
  return (
    <div className='facultyMembersCards'>
        <img src={image} alt="" />
       <div className='about'> <div className="name">{name}</div>
        <div className="job">Sr. Faculty Data Science</div></div>
        <div className="desc">If you are looking at blank cassettes on the web, you may be very confused at the difference in price.</div>
        <div className="icon">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        </div>
    </div>
  )
}

export default FacultyMembersCards