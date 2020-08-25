import React from 'react'
import './Projects.css'
import projectDetails from '../assets/projectDetails.json'

export default function Projects() {
  return (
    <article className="card-container">
      {projectDetails.map(project =>
        <div className='project-card'>
          <h2 className="project-title">{project.title}</h2> 
          <div className="image-description">
            <img className="project-image" src={project.imageURL} />
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <p className="project-url"><a href={project.websiteURL}>Check out {project.title}!</a></p>
                <p className="project-git"><a a href={project.githubURL}>Check out {project.title} on github!</a></p>
              <p className="project-tools">{project.toolsUsed}</p>
              <p className="project-type">{project.type}</p>
              </div>
          </div>
        </div>
      )}
    </article>
  )
}
