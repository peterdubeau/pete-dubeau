import React from "react";
import "./Projects.css";
import projectDetails from "../assets/projectDetails.json";

export default function Projects() {
  const icons = {
    ruby: "https://res.cloudinary.com/dyrvlnond/image/upload/v1620742015/portfolio/tool-icons/B%20and%20W/Ruby_oanb34.png",
    wordpress:
      "https://res.cloudinary.com/dyrvlnond/image/upload/v1621013448/portfolio/tool-icons/wordpress_ozcxr2.png",
    html: "https://res.cloudinary.com/dyrvlnond/image/upload/v1620742015/portfolio/tool-icons/B%20and%20W/html-solid_zz3hsz.png",
    nodeJs:
      "https://res.cloudinary.com/dyrvlnond/image/upload/v1620742015/portfolio/tool-icons/B%20and%20W/nodejs-icon-1_pcpsvm.png",
    react:
      "https://res.cloudinary.com/dyrvlnond/image/upload/v1620742015/portfolio/tool-icons/B%20and%20W/react_ekh4rj.png",
    heroku:
      "https://res.cloudinary.com/dyrvlnond/image/upload/v1620742015/portfolio/tool-icons/B%20and%20W/heroku_jfqe3e.png"
  };

  console.log(icons["ruby"]);

  return (
    <article className="card-container" id="card-list">
      {projectDetails.map((project) => (
        <div className="project-card">
          <div className="black-strip"></div>
          <div className="image-description">
            <div className="project-details">
              <h2 className="project-title">
                {project.title}
                <img className="project-image" src={project.imageURL} />
              </h2>
              <p className="project-type">
                {project.type}
                <div className="icon-container">
                  {project.toolsUsed.map((proj) => {
                    return (
                      <img
                        src={icons[proj]}
                        style={
                          proj === "ruby" ||
                          proj === "nodeJs" ||
                          proj === "wordpress" ||
                          proj === "heroku" ||
                          proj === "html"
                            ? { filter: "invert(100%)" }
                            : {}
                        }
                        className="skill-icon"
                      />
                    );
                  })}
                </div>
              </p>
              <p className="project-description">
                {project.description}
                {project.title === "Ordo Nomina" ? (
                  <>
                    <br />
                    <p style={{ marginTop: "30px" }}>
                      "One of the best trackers I've seen online."{" "}
                      <a href="https://www.reddit.com/r/dndnext/comments/koi1tz/ordo_nomina_a_realtime_initiative_tracker_for_dd/ghs6kwp?utm_source=share&utm_medium=web2x&context=3">
                        -Some Random Person On{" "}
                        <span style={{ textDecoration: "underline" }}>
                          Reddit
                        </span>
                      </a>
                    </p>
                  </>
                ) : (
                  ""
                )}
              </p>
              <div className="buttons">
                <a href={project.websiteURL}>
                  <button className="project-url">Site</button>
                </a>
                {project.githubURL == null ? (
                  ""
                ) : (
                  <a a href={project.githubURL}>
                    <button className="project-git">Github</button>
                  </a>
                )}
              </div>
            </div>
          </div>
          <img className="site-gif" src={project.siteGif} />
        </div>
      ))}
    </article>
  );
}
