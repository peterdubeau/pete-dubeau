import React from 'react'
import './Projects.css'
import projectDetails from '../assets/projectDetails.json'

export default function Projects() {
  return (
    <article className="card-container" id="card-list">
      {projectDetails.map(project =>
        <div className='project-card'>
          <div className="image-description">
              <div className="project-details">
                <h2 className="project-title">{project.title}</h2> 
                <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}
                {project.title === "Ordo Nomina" ?
                  <>
                  <br/>
                    <p style={{ marginTop: "30px" }}>"One of the best trackers I've seen online." <a href="https://www.reddit.com/r/dndnext/comments/koi1tz/ordo_nomina_a_realtime_initiative_tracker_for_dd/ghs6kwp?utm_source=share&utm_medium=web2x&context=3">-Some Random Person On <span style={{textDecoration: "underline"}}>Reddit</span></a></p>
                  </>
                    : ""
                    }
              </p>
              <div className="buttons">
                <a href={project.websiteURL}><button className="project-url">Site</button></a>
                {project.githubURL == null ? "" : <a a href={project.githubURL}><button className="project-git">Github</button></a> }
              </div>
              </div>
            <img className="project-image" src={project.imageURL} />
          </div>
        </div>
      )}
    </article>
  )
}
