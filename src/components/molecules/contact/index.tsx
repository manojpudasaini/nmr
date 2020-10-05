import React from 'react';
import {createUseStyles} from "react-jss";
import {FacebookOutlined,InstagramOutlined,LinkedinOutlined,MailOutlined} from '@ant-design/icons';
//import {useHistory} from 'react-router';

const useStyles = createUseStyles({
    contactWrapper:{
        marginTop:80,
        fontFamily: `'Montserrat',sans-serif`,
        padding:20,
        backgroundColor:'#080808',
        maskImage:'linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0.7))',
        textAlign:'center',
    },
    contactHeader:{
        textAlign:'center',
        fontSize: 40,
        fontWeight: 600,
        lineHeight:'64px',
        color: '#fff',
        
    },
    socialIcon:{
        backgroundColor:'#fff',
        color:"black",
        fontSize:30,
        margin:'20px 15px',
        '&:hover':{
            color:'#C20806',
        }
    },
    mailText:{
        fontSize:20,
        color:'#fff',
    }
})

const Contact =() =>{
    const classes= useStyles();
    // const history= useHistory();
    // const facebookHandler=()=>{
    //     history.replace('www.facebook.com');
    // }
    return(
        <div className={classes.contactWrapper}>
            <div className={classes.contactHeader}>
               Get In Touch
            </div>
            <div>
            
           <a href="https://facebook.com/mpudasaini17" target="_blank" rel="noopener noreferrer">
                 <FacebookOutlined className={classes.socialIcon}/>
           </a>
           
           <a href="https://www.instagram.com/pudasaini_manoj/" target="_blank" rel="noopener noreferrer">
               <InstagramOutlined className={classes.socialIcon} />
            </a> 
            
            <a href="https://www.linkedin.com/in/manoj-pudasaini-641324147/" target="_blank" rel="noopener noreferrer">
                 <LinkedinOutlined className={classes.socialIcon} />
            </a>
           
            </div>
            <span className={classes.mailText}>Mail Me At: </span>
            <span className={classes.mailText}> 
            <a href="mailto:mpudasaini17@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailOutlined className={classes.socialIcon}/>
                </a>
                </span>
        </div>
    )
}

export default Contact;
