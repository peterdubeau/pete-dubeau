import React, { useState } from 'react'
import ProjectIcons from '../ProjectIcons/ProjectIcons'
import './Intro.css'


export default function Intro() {
  const [showProjects, setShowProjects] = useState(false)

  return (
    <div className="image">
      <div className='text'>
        <h2 className='intro'>
          Hey, I'm Pete DuBeau, a Solutions Engineer and Full Stack Web Developer. 
        </h2>
          <p className ="check" onClick={() => setShowProjects(!showProjects)}><a>Check out my projects!</a></p>
      </div>
      {showProjects ? <ProjectIcons show={setShowProjects}/> : ''}
    </div>

  )
}
