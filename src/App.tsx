import React from 'react';
import Navbar from "../src/components/molecules/navbar/index";
import Project from './pages/Project/projects';
import Skills from './components/molecules/skills/index';
import Portfolio from "./components/molecules/portfolio/index";
import Contact from "./components/molecules/contact/index";
import About from "./components/molecules/about/index";
const  App=()=> {
  return ( 
  <div style={{backgroundColor:"#ccc"}}>
    <Navbar/>
   <Portfolio />
   <Skills/>
   <Project/>
   <About/>
   <Contact/>
 
  </div>
       
  );
}

export default App;
