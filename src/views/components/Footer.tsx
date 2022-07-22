import React from 'react'
import "../styles/footer.css"
const Logo = require("../../assets/images/white logo.png")
const socialImg1 = require("../../assets/images/socials/Vector.png")
const socialImg2 = require("../../assets/images/socials/Vector-1.png")
const socialImg3 = require("../../assets/images/socials/Vector-2.png")
const socialImg4 = require("../../assets/images/socials/Vector-3.png")

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="footer-list-wrapper">
            <div className="footer-list-div">
              <div className="footer-list-title">Features</div>
                <ul className='footer-list-ul'>
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </ul>
              
            </div>
            <div className="footer-list-div">
              <div className="footer-list-title">Resources</div>
                <ul className='footer-list-ul'>
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              
            </div>
            <div className="footer-list-div">
              <div className="footer-list-title">Company</div>
                <ul className='footer-list-ul'>
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contacts</li>
                </ul>
              </div>

        </div>
        <div className="footer-icons-wrapper">
            <img src={socialImg1} alt="socials" />
            <img src={socialImg2} alt="socials" />
            <img src={socialImg3} alt="socials" />
            <img src={socialImg4} alt="socials" />
        </div>
    </div>
  )
}


export default Footer