import React from 'react';
import {createUseStyles} from 'react-jss';

export interface ProjectCardProps{
        projectTitle ?: string;
        language ?: any;
        url ?:string;
        link ?:string;

}

const useStyles=createUseStyles({
    wrapper:{
        height:350,
        width:300,
        position:'relative',
        padding:'1px 0px 0px 0px',
        border:'1px solid rgba(150,5,5,0.8)',
        margin:'10px 5px 0px 5px',
        backgroundColor:'rgba(255,255,255,1)',
        boxShadow:'2px 3px rgba(150,5,5,0.8)',
        borderRadius:13,
        '& :hover $projectImagewrapper ':{
            display:'block',
            width:'100%',
        },
    },
    projectImageHolder:{
        height:270,
        // backgroundImage:`url("https://res.cloudinary.com/odin/image/upload/v1596349955/butterfly_jo1s9x.png")`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        borderRadius:'13px 13px 0px 0px',
        
    },
    projectImagewrapper:{
        background:'rgba(0,0,0,0.5)',
        position:'absolute',
        display:'none',
        height:270,
        width:300,
        borderRadius:'13px 13px 0px 0px',
    },
    projectImageInfoHolder:{
        color:'rgba(255,255,255,0.9)',
        textAlign:'center',
        fontFamily:`'Montserrat',sans-serif`,
        fontSize:25,
        fontWeight:600,
        margin:'110px 0px 0px 0px',
        
        '& a':{
            width:100,
            fontSize:15,
            textDecoration:'none',
            display:'block',
            fontFamily:`'Montserrat',sans-serif`,
            textAlign:'center',
            margin:'40px 0px 0px 100px',
            color:'rgba(255,255,255,0.9)',
            backgroundColor:'rgba(255,255,255,0.2)',
            borderRadius:7,
            padding:4,
            border:'1px solid rgba(255,255,255,0.2)',
            cursor:'pointer',
            boxShadow:'2px 2px rgba(0,0,0,0.3)',
        }
    },
    projectInformationHolder:{
        borderTop:'1px solid #CCC',
        textAlign:'center',
        padding:'1px 5px 0px 0px',
        fontFamily:`'Montserrat',sans-serif`,
        '& p':{
            fontSize:20,
            fontWeight:600,
            display:'block',
            margin:'2px 0px 8px 0px',
        },
        '& span':{
            padding:4,
            marginRight:8,
            color:'#ffffff',
            backgroundColor:'#061136',
            borderRadius:5,
        },
    },
});

const ProjectCard: React.FC<ProjectCardProps>=(props)=>{
    const classes=useStyles();
    return(
        <div className={classes.wrapper}>
            <div className={classes.projectImageHolder} style={{backgroundImage:`url(${props.url})`}}>
            <div className={classes.projectImagewrapper}>
                <div className={classes.projectImageInfoHolder}>
                    {props.projectTitle}
                    <a href={props.link} target="_blank" rel="noopener noreferrer">See more</a>
                </div>
            </div>
            </div>
            <div className={classes.projectInformationHolder}>
                <p>{props.projectTitle}</p>
                {
                    props.language.map((ele:any)=> <span>{ele}</span>)
                }
               
            </div>
        </div>

    )
}
export default ProjectCard;

