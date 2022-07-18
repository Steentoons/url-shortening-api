import React from 'react'
import "../styles/moreThanLinks.css"
import Button from './Button'
const workerGraphic = require("../../assets/images/worker graphic.png")

const MoreThanLinks = () => {
  return (
    <div className='more-than-links-container'>
        <div className="more-than-links-content-wrapper">
            <div className="more-than-links-content-title">More than just shorter links</div>
            <div className="more-than-links-content-desc">Build you brand’s recognition and get detailed insights on how yout links are perfotming.</div>
            <div className="more-than-links-content-button">
                <Button background={true} content="Get Started" />
            </div>
        </div>
        <div className="more-than-links-image">
            <img src={workerGraphic} alt="worker graphic" />
        </div>
    </div>
  )
}

export default MoreThanLinks