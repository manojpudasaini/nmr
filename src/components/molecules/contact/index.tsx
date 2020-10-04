import React from 'react';
import {createUseStyles} from "react-jss";
import {FacebookOutlined,InstagramOutlined,LinkedinOutlined} from '@ant-design/icons';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {useHistory} from 'react-router';

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
        fontSize:30,
        margin:'20px 15px',
    },
    mailText:{
        fontSize:18,
        color:'#fff',
    }
})

const Contact =() =>{
    const classes= useStyles();
    const history= useHistory();
    const facebookHandler=()=>{
        history.replace('www.facebook.com');
    }
    return(
        <div className={classes.contactWrapper}>
            <div className={classes.contactHeader}>
               Get In Touch
            </div>
            <div>
            
           <a href="https://facebook.com/mpudasaini17">
                 <FacebookOutlined className={classes.socialIcon}/>
           </a>
           
            
            <InstagramOutlined className={classes.socialIcon} />
            <LinkedinOutlined className={classes.socialIcon} />
           
            </div>
            <span className={classes.mailText}>Mail Me At: </span>
            <span className={classes.mailText}>mpudasaini17@gmail.com</span>
        </div>
    )
}

export default Contact;
