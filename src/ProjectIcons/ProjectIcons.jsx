import React, {useState} from 'react'
import projectDetails from '../assets/projectDetails.json'
import Projects from '../Projects/Projects'
import './ProjectIcons.css'

export default function ProjectIcons(props) {

  const [display, setDisplay] = useState({
    "Ordo Nomina": false,
    "Beernoculars": false,
    "Rookies and Dragons": false,
    "Next Round": false,
    intro: false
  })
  console.log(props.show.icons)

  const handleClick = (project) => {
    setDisplay(display =>
      ({ ...display, [project.title]: !display[project.title] }))
    props.setShow(false)
  }

  return (
    <div className='greeting'>
        <div className='welcome-aura'>
      <div className='welcome-container'>
        <div className="welcome-body">
          <h2>Click around or whatever</h2>
            <div className='image-container'>
              {props.show.icons ? 'no' : "yes"}
              {projectDetails.map(project => 
                <img
                  className='project-image'
                  src={project.imageURL}
                  onClick={() => handleClick(project.title)}
                  />
              )}
            </div>
            <button onClick={() => props.setShow()}>Ok, got it.</button>
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
