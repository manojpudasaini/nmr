import React from 'react';
import ProjectCard from '../../components/molecules/project-card/index';
import {createUseStyles} from "react-jss";

const useStyle = createUseStyles({
  projectTitle:{
    fontSize:40,
    color:'#f06060',
    fontFamily:`'Montserrat',sans-serif`,
    lineHeight:'64px',
    textAlign:'center',
    margin:'50px 0px',
    fontWeight:600,
  },
})

const  Project=()=> {
  const classes = useStyle();
  return ( 
    <div >
      <div className={classes.projectTitle}>
        WORK
      </div>
    <div style={{display:'grid',placeItems:'center',gridTemplateColumns:'repeat(auto-fit, minmax(18rem, 1fr)',gridGap:'1rem',}}>
        <ProjectCard
        projectTitle="Google Maps"
        language={['C++','JavaScript','XML','Ajax']} 
        url='https://res.cloudinary.com/odin/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1599804837/Google/Google_Maps_kknzgv.jpg'
        link='https://www.google.com/maps'
       />
        <ProjectCard
        projectTitle="Google Photos"
        language={['REST','Java','PHP']} 
        url='https://res.cloudinary.com/odin/image/upload/ar_1:1,c_fill,g_face:center,w_1000/v1599804838/Google/Google_Photos_jiwl3u.jpg'
        link='https://www.google.com/photos'
       />
               <ProjectCard
        projectTitle="Google Drive"
        language={['Python','Objective-C']} 
        url='https://res.cloudinary.com/odin/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1599804837/Google/Google_Drive_hp5wig.webp'
        link='https://www.google.com/drive'
       />
               <ProjectCard
        projectTitle="Google Keep"
        language={['Java']} 
        url='https://res.cloudinary.com/odin/image/upload/ar_1:1,c_fill,g_face:center,w_1000/v1599804837/Google/Google_Keep_dpedfm.png'
        link='https://www.google.com/keep'
       />

      </div>
       </div>
       
  );
}

export default Project;
