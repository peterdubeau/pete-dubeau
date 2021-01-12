import React, {useState} from 'react'
import './Projects.css'
import projectDetails from '../assets/projectDetails.json'

export default function Projects(props) {
  
  return (
    <article className="card-container" id="card-list">
      {projectDetails.map(project =>
        <div className='project-card'
        style={!props.display[project.title] ? { display: 'none' } : {}}
        >
          <button
            onClick={() => props.setDisplay(display =>
              ({ ...props.display, [project.title]: !display[project.title] }))
            }
            name={project.title}
            value={props.display[project.title]}
            >
            {console.log(props.display[project.title])}
            Switch
          </button>
          <div className="image-description">
            <img className="project-image" src={project.imageURL} />
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2> 
                <p className="project-type">{project.type}</p>
                <p className="project-description">{project.description}</p>
              <div className="buttons">
                <a href={project.websiteURL}><button className="project-url">Site</button></a>
                <a a href={project.githubURL}><button className="project-git">Github</button></a>
              </div>
              </div>
          </div>
        </div>
        )}
    </article>
  )
}
