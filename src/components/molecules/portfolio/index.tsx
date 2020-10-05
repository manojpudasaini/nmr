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
        marginTop:7,
        height:'500px',
        width:'100%',
        background:'#000',
        opacity:'70%',
    },
    infoHolder:{
        display:'flex',
        flexFlow:'column',
        position:'absolute',
        top:'30%',
        left:'42%',
        transform:'translate(-30%,-42%)',
    },
    intro:{
        textAlign:'center',
        color:'#fff',
        fontSize:'2rem',
        fontWeight:600,
        letterSpacing:6,
        fontFamily:`'Montserrat',sans-serif`,
    },
    profession:{
        textAlign:'center',
        marginTop:'0%',
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
        },
        infoWrapper:{
            height:'46vh'

        },
        portfolioWrapper:{
            height:'46vh'
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
            <Slider imageUrl="https://res.cloudinary.com/odin/image/upload/v1601813709/timthumb_bkp2do.jpg"/> 
        </div>

    )
}

export default Portfolio;
