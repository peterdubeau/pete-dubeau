import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import Intro from './Intro/Intro'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'


function App() {
  return (<>
    <Nav />
    <Intro />
    <AboutMe />
    <Contact />
    <Footer />
  </>);
}

export default App;
