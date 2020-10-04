import React,{useState,useEffect} from 'react';
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
      backgroundColor:'#080808', 
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
            fontWeight:600,
            color:'white',
            textDecoration:'none',
            '&:hover':{
                color:'#cc0000',
            },
            '&:active':{
                color:'#cc0000',
            },
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
           zIndex:100,
           display:'flex',
           position:'absolute', 
           backgroundColor:'#080808',
           top:'10%',
           right:0,
           height:'100vh',
           width:'50%',
           flexDirection:'column',
           transition:'all 0.6s ease-out',
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
                <MenuOutlined className={classes.hamBurger} />
                <ul className={classes.navLinks}>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><Button buttonName="Contact"/></li>
                </ul>
            </nav>      
        </div>
    )
}


export default Responsivenav;