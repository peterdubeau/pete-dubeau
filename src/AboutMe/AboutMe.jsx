import React from "react";
import Skills from "../Skills/Skills";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div id="about-container">
      <article className="project-card" id="about">
        <h2 className="about">About Me</h2>
        <p className="me">
          I am a software engineer who leverages eight years of sales and
          account management experience to build and implement consumer driven
          products. Whether it be navigating B2B sales issues or developing
          websites, I am an expert at diagnosing the core problems to technical
          issues and developing customized solutions that speak to the heart of
          customers' needs. I seek the opportunity to join a forward-thinking
          technology team that places consumer experience at the center of what
          they do.
        </p>
        <Skills />
      </article>
    </div>
  );
}
