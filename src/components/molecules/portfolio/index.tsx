import React from 'react';
import Slider from "../../atoms/slider/index";
import {createUseStyles} from 'react-jss';


const useStyles=createUseStyles({
    portfolioWrapper:{
        marginRight:'auto',
        height:'70vh',
        width:'100%',
    },
    infoWrapper:{
        position:'absolute',
        height:'70vh',
        width:'100%',
        background:'#000',
        opacity:'70%',
    },
    infoHolder:{
        display:'flex',
        flexFlow:'column',
        position:'absolute',
        top:'30%',
        left:'45%',
        transform:'translate(-30%,-30%)',
    },
    intro:{
        textAlign:'center',
        color:'#fff',
        fontSize:'2rem',
        fontWeight:600,
        fontFamily:`'Montserrat',sans-serif`,
    },
    profession:{
        textAlign:'center',
        marginTop:'30%',
        color:'#fff',
        fontSize:'1.5rem',
        fontWeight:400,
        fontFamily:`'Montserrat',sans-serif`,
    },

    '@media (max-width:768px)':{
        intro:{
            fontSize:'1.2rem',
        },
        profession:{
            fontSize:'1rem',
        }
    }

    
})
const Portfolio =()=>{
    const classes=useStyles();
    return(
        <div className={classes.portfolioWrapper}>
            <div className={classes.infoWrapper}></div>
            <div className={classes.infoHolder}>
            <div className={classes.intro}>
              <p >HEY! I'M MANOJ PUDASAINI</p> 
            </div>
            <div className={classes.profession}>
                WEB DESIGNER AND DEVELOPER
            </div>
            </div>
            <Slider imageUrl="https://res.cloudinary.com/odin/image/upload/v1596349955/butterfly_jo1s9x.png"/> 
        </div>

    )
}

export default Portfolio;
