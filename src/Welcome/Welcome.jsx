import React, {useState, useEffect} from 'react'
import './Welcome.css'

export default function Welcome() {

  return (
    <div className="welcome-container">
      <div className="text-container">
        <h2 className="pete">Hey, I'm Pete</h2>
        <h3 className='welcome'>Welcome to my portfolio</h3>
      </div>
    </div>
  )
}
