import React from 'react'
import FacultyMembersCards from '../FacultyMembersCards'
import "./index.scss"

function FacultyMembers() {
  return (
    <div className='facultyMembers'>
        <div className="facultyMembersAll">
            <h3 className="header">Faculty Members</h3>
            <p className="about">If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
            <div className="cards">
                <FacultyMembersCards image={"https://preview.colorlib.com/theme/educature/img/faculty/f1.jpg.webp"} name={"Ethel Davis"}></FacultyMembersCards>
                <FacultyMembersCards image={"https://preview.colorlib.com/theme/educature/img/faculty/f2.jpg.webp"} name={"Rodney Cooper"} ></FacultyMembersCards>
                <FacultyMembersCards image={"https://preview.colorlib.com/theme/educature/img/faculty/f3.jpg.webp"} name={"Dora Walker"}></FacultyMembersCards>
                <FacultyMembersCards image={"https://preview.colorlib.com/theme/educature/img/faculty/f4.jpg.webp"} name={"Lena Keller"}></FacultyMembersCards>

            </div>
        </div>
    </div>
  )
}

export default FacultyMembers