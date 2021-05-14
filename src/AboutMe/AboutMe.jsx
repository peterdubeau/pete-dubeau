import React from "react";
import Skills from "../Skills/Skills";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-container"  id="about">
      <div className="about-text">
      <h2 className="about">Technologies used</h2>
        <p>I'm skilled in modern web development including JavaScript, React, and Ruby on Rails; Just to name a few.</p>
      </div>
        <Skills />
    </div>
  );
}
