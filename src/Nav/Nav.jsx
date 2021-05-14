import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className ="header">
      <h1 className ="name">Pete DuBeau</h1>
      <ul className= "nav-bar">
        <li className="nav-buttons"><a className="nav-buttons" href="#">Home</a></li>
        <li className="nav-buttons"><a className="nav-buttons" id="projects" href="#card-list">Projects</a></li>
        <li className="nav-buttons"><a className="nav-buttons" id="top" href="#about">About</a></li>
        <li className="nav-buttons"><a className="nav-buttons" href="#contact">Contact</a></li>
      </ul>

      
      <ul className= "nav-bar-narrow">
        <li className="nav-buttons"><a className="nav-buttons" href="#">Home</a></li>
        <li className="nav-buttons"><a className="nav-buttons" id="projects" href="#card-list">Projects</a></li>
        <li className="nav-buttons"><a className="nav-buttons" id="top" href="#about-container">About</a></li>
        <li className="nav-buttons"><a className="nav-buttons" href="#contact">Contact</a></li>
      </ul>

    </div>
  )
}