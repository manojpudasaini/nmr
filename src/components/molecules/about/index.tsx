import React from 'react';
import {createUseStyles} from 'react-jss'
import Myphoto from "../../../assets/manoj.jpg";

const useStyles=createUseStyles({
    aboutContainer:{
        fontFamily:`'Montserrat',sans-serif`,
        display:'flex',
        margin:"0px 50px 0px 100px",
    },
    aboutHeader:{
        fontFamily:`'Montserrat',sans-serif`,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 600,
        lineHeight:'64px',
        margin:'40px 0px',
        color: '#AB274F',
    },
    myImageWrapper:{
        width: 200,
        height: 200,
        margin: '0 auto',
        borderRadius: '50%',
        backgroundSize: 'cover',
        backgroundPosition:'0% 35%',
    },
    myInfoWrapper:{
        width:'80%',
        height:'100%',
        padding:20,
        '& p':{
            color:"#010b13",
            fontWeight:500,
            fontSize:'1.3em',
            lineHeight:'2em',
            wordSpacing:'0.1em',
            marginBottom:'1.8em',
        },
        
    },
    '@media (max-width:768px)':{
        aboutContainer:{
            flexFlow:'column',
            margin:'20px 0px 0px 0px',
            alignItems:'center',
        },
        myInfoWrapper:{
            '& p':{
                textAlign:'center',
            }
        }
    },
})

const About =() =>{
    const classes= useStyles();
    return(
        <div>
        <div className={classes.aboutHeader}>
             About Me <span role="img" aria-label="hugging-face">🤗</span>
             <div style={{height:'3px',width:"280px",margin:"0 auto",backgroundColor:'#248760'}}>
             </div>
         </div>
        <div className={classes.aboutContainer}>
            <div className={classes.myImageWrapper} style={{backgroundImage:`url(${Myphoto})`}}> 
            </div>
        <div className={classes.myInfoWrapper}>
           <p>Hi! I'm <strong>Manoj Pudasaini.</strong> I'm pursuing degree in <strong>Bachelor's of Engineering in Information Technology (BEIT)</strong> from Everest Engineering College. I like to explore things and I'm very passionate about <strong>coding and solving problems.</strong> Also, I'm friendly in nature. We shall talk.</p>

        </div>

        </div>
        </div>
    )
}

export default About;