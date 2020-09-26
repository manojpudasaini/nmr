import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react';
import {createUseStyles} from 'react-jss';
import {MenuOutlined} from "@ant-design/icons";
import Logo from '../../../assets/logo.png';
import Button from '../../atoms/button/index';

const useStyles = createUseStyles({
    
    mainWrapper:{
        fontFamily:`'Montserrat',sans-serif`,
    },

    imageWrapper:{
        top:'2%',
        position:'absolute',
        height:'10vh',
        '& img':{
            padding:'5px 15px',
            cursor:'pointer',
        },
    },
    navWrapper:{
        height:'10vh',
        backgroundColor:'#5b78c7',  
    },

    navLinks:{
        display:'flex',
        listStyle:'none',
        width:'50%',
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        marginLeft:'auto',
        '& li a':{
            fontSize:'1.2rem',
            color:'white',
            textDecoration:'none',
        },
    },
    hamBurger:{
    display:'none',
    },

    '@media (max-width: 768px)':{
        imageWrapper:{
            top:0,
            position:'absolute',
            height:'10vh',
            '& img':{
                padding:'5px 15px 0px 15px',
            },
        },
        navLinks:{
            zIndex:1,
           display:'flex',
           position:'fixed', 
           backgroundColor:'#5b78c7',
           top:'9%',
           right:0,
           height:'50vh',
           width:'20vh',
           flexDirection:'column',
           clipPath:'circle(100px at 90% -10% )',
           '-webkit-clipPath':'circle(1200px at 90% -10%)',
           transition:'all 1s ease-out',
           '& li a':{
            fontSize:'0.9rem',
           },
        },
        nav:{
           position:'relative',
        },
        hamBurger:{
            zIndex:2,
            display:'block',
            position:'absolute',
            color:'white',
            cursor:'pointer',
            fontSize:30,
            right:'5%',
            top:'3%',
            transform:'translate(-5%,-3%)',
        },
    }

})

const Responsivenav =() =>{
    const classes= useStyles();

    return(    
        <div className={classes.mainWrapper} >
            <div className={classes.imageWrapper}>
              <a href="/"><img src={Logo} width='200px'/></a>  
            </div>
            <nav className={classes.navWrapper}>
                <MenuOutlined className={classes.hamBurger}/>
                <ul className={classes.navLinks}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><Button buttonName="Sign Up"/></li>
                </ul>
            </nav>      
        </div>
    )
}


export default Responsivenav;