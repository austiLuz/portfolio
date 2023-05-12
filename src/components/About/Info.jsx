import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">&lt; 1 year coding. <br></br>10 years in Sales. <br></br>8 years in tech.</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5 projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-code-block about__icon'></i>
            <h3 className="about__title">Looking for</h3>
            <span className="about__subtitle">Junior Frontend Developer roles</span>
        </div>
    </div>
  )
}

export default Info