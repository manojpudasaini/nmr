import React from 'react';
import Navbar from "../src/components/molecules/navbar/index";
import Project from './pages/Project/projects';
import Skills from './components/molecules/skills/index';
import Portfolio from "./components/molecules/portfolio/index";

const  App=()=> {
  return ( 
  <div>
    <Navbar/>
   <Portfolio />
   <Project/>
   <Skills/>
  </div>
       
  );
}

export default App;
