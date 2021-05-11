import React from "react";
import Skills from "../Skills/Skills";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-text">
      <h2 className="about">Technologies used</h2>
        <p>Here's a few examples of tech stacks I work with.</p>
      </div>
        <Skills />
    </div>
  );
}
