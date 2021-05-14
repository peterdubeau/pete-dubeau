import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import Intro from './Intro/Intro'
import Footer from './Footer/Footer'
import Welcome from './Welcome/Welcome'

function App() {
  return (<>
    {/* <Welcome /> */}
    <Nav />
    <Intro />
    <AboutMe />
    <Projects />
    <Footer />
</>);
}

export default App;
