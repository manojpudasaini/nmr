import React from 'react';
import {createUseStyles} from 'react-jss';
import Coverphoto from '../../../assets/image.jpg';

const useStyles= createUseStyles({
    informationContainer:{
        height:600,
        backgroundColor:'aqua',
        textAlign:'center',
        
        '& span':{
        color:'#fff',
        textTransform:'uppercase',
        display:'block',
        position:'absolute',
        }
    },

    informationWrapper:{
        backgroundColor:'#000',
        opacity:'70%',
        height:600,
        width:'100%',
        position:'absolute',
        
    },
    
    intro:{
        fontFamily:`'Montserrat',sans-serif`,
        fontSize:60,
        top:'30%',
        left:'36%',
        animation:`$intro 2s 1`,
    },
    '@keyframes intro':{
       from:{
          fontSize:70,
       },
       to:{
           fontSize:60,
       }

    },
    profession:{
        fontFamily:`'Montserrat',sans-serif`,
        top:'43%',
        left:'42%',
        fontSize:17,   
        animation:`$profession 2s 1`,
    } , 

    '@keyframes profession':{
        from:{
            fontSize:13,
        },
        to:{
            fontSize:17,
        }
    },   
}
)

const Slider =()=>{
    const classes=useStyles();
    return(
        <div className={classes.informationContainer}> 
        <div className={classes.informationWrapper}>
        </div>
        <span className={classes.intro}>hey! i'm Manoj </span>
        <span className={classes.profession} >web designer and developer</span> 
        <img src={Coverphoto} alt="background" height="100%" width="100%"/>   
        </div>
    )
}

export default Slider;