import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <ul className="footer">
        <li className="contact" id="name">Peter DuBeau 2020</li>
        <div className="icon-container" id="contact">
          <li><h3>Contact:</h3> </li>
          <li className="contact"><a href="https://github.com/peterdubeau"><img className="footer-icons" style={{filter: "invert(100%"}}src="https://res.cloudinary.com/dyrvlnond/image/upload/v1598542145/portfolio/tool-icons/github_l8jzfj.png"/></a></li>
          <li className="contact"><a href="https://www.linkedin.com/in/peterdubeau"><img className="footer-icons" src="https://res.cloudinary.com/dyrvlnond/image/upload/v1620950370/portfolio/Site%20icons/linkedin-icon-18-256_y15irp.png" /></a></li>
          <li className="contact"><a href="mailto:spaceboatproduction@gmail.com"><img className="footer-icons" src="https://res.cloudinary.com/dyrvlnond/image/upload/v1620950987/portfolio/Site%20icons/envelope_eduuet.png"/></a></li>
        </div>
      </ul>
    </div>
  ) 
}


