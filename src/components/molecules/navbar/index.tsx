import React from 'react';
import {createUseStyles} from 'react-jss';
import Logo from '../../../assets/logo.png';


const useStyles=createUseStyles({
    navbarContainer:{
        height:100,
        //backgroundColor:'red',
        display:'flex',
    },
    imageWrapper:{
        //backgroundColor:"aqua",
        height:"100%",
        width:'40%',
        marginLeft:100,
        display:'flex',
        alignItems:'center',
    },
    navbarWrapper:{
        //backgroundColor:"yellow",
        height:"100%",
        width:'60%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:100,
        '& a':{
            textTransform:'uppercase',
            textDecoration:'none',  
            color:'#22313F',
            fontSize:17,
            fontFamily:`'Montserrat',sans-serif`,
        },
        '& a:hover':{
            color:'#f06060',
        },
        '& a:focus':{
            color:'#f06060',       
        },
        '& button':{
            backgroundColor:'#f06060',
            padding:'7px 10px',
            textTransform:'uppercase',
            borderRadius: 4,
            border:'1px solid #f06060',
            color:'#fff',
            fontSize:17,
            fontFamily:`'Montserrat',sans-serif`,
        },
        '& button:hover':{
            color:'#f06060',
            backgroundColor:'#fff',
        },
        '& button:focus':{
            outline:'none',
        },
        
},
    

})
const Navbar =()=>{
    const classes=useStyles();
    return(
       
        <div>

        
        <div className={classes.navbarContainer}>
            <div className={classes.imageWrapper}>
                <a href="/"><img src={Logo} alt="smartlyown-image" width='250' height='100'/></a>
            </div>
            <div className={classes.navbarWrapper}>
                <a href="#">portfolio</a>
                <a href="#">skills</a>
                <a href="#">services</a>
                <a href="#">pricing</a>
                <a href="#">blog</a>
                <button type='submit'>contacts</button>
            </div>
        </div>
        
        </div>
       
    )
}

export default Navbar;
