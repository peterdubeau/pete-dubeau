import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import Intro from './Intro/Intro'
import Footer from './Footer/Footer'
// import Skills from './Skills/Skills'

function App() {
  return (<>
    <Nav />
    <Intro />
    <AboutMe />
    <Projects />
    <Footer />
  </>);
}

export default App;
