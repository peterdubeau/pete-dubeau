import React, {useState} from 'react'
import projectDetails from '../assets/projectDetails.json'
import Projects from '../Projects/Projects'
import './ProjectIcons.css'

export default function ProjectIcons(props) {

  const [display, setDisplay] = useState({
    "Ordo Nomina": false,
    "Beernoculars": false,
    "Rookies and Dragons": false,
    "Next Round": false
  })

  return (
    <div className='greeting'>
        <div className='welcome-aura'>
      <div className='welcome-container'>
        <div className="welcome-body">
          <h2>Click around or whatever</h2>
            <div className='image-container'>
              {projectDetails.map(project => 
                <img
                  className='image'
                  src={project.imageURL}
                  onClick={() => setDisplay(display =>
                    ({ ...display, [project.title]: !display[project.title] }))
                  }
                  />
              )}
            </div>
            <button onClick={() => props.show()}>Ok, got it.</button>
            <Projects
              setDisplay={setDisplay}
              display={display}
            
            />
        </div>
      </div>
    </div>
    </div>
  )
}
