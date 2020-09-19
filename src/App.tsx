import React from 'react';
import Navbar from "../src/components/molecules/navbar/index";
import Slider from "./components/molecules/slider/index";
 import Project from './pages/Project/projects';
import Skills from './components/molecules/skills/index';
const  App=()=> {
  
  return ( 
    <div>
      <Navbar/>
      <Slider/>
      <Project/>
      <Skills/>
    </div>
       
  );
}

export default App;
