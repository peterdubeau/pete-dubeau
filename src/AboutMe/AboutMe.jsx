import React from "react";
import Skills from "../Skills/Skills";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div id="about-container">
      <article className="project-card" id="about">
        <h2 className="about">About Me</h2>
        <Skills />
      </article>
    </div>
  );
}
