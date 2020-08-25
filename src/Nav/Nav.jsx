import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className ="header">
      <h1 className ="name">Pete DuBeau</h1>
      <ul className= "nav-bar">
        <li className="nav-buttons">Home</li>
        <li className="nav-buttons">Projects</li>
        <li className="nav-buttons">About</li>
        <li className="nav-buttons">Contact</li>
      </ul>
    </div>
  )
}
