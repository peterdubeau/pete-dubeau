import React, {useState, useEffect} from 'react'
import './Welcome.css'

export default function Welcome() {

  // const [display, setDisplay] = useState()
  
  // async function slow(ms) {
  //   return new Promise(slowDown => setInterval(slowDown, ms))
  // }

  // async function hideWelcome() {
  //   await slow(4800)
  //   setDisplay({display: "none"})
  // }

  // useEffect(() => {
  //   hideWelcome()
  // })



  return (
    <div className="welcome-container">
      <div className="text-container">
        <h2 className="pete">Hey, I'm Pete</h2>
        <h3 className='welcome'>Welcome to my portfolio</h3>
      </div>
    </div>
  )
}
