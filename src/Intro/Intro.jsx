import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="image">
      <div className="intro-text-container">
        <h2 className="i-am">I’m a NY-based software engineer </h2>
        <p className="long">
          who leverages 8 years
          of sales and account management experience to build and implement
          consumer driven products. Whether it be navigating B2B sales issues or
          developing websites, I really enjoy diagnosing the core problems to
          technical issues and developing customized solutions that speak to the
          heart of customers needs.
        </p>
        <a href="#card-list"><p className="check">
        Check out my projects!
      </p></a>
      </div>
      <img className="computers" src="https://res.cloudinary.com/dyrvlnond/image/upload/v1620739701/portfolio/compy_txpnh4.webp" />
    </div>
  );
}
