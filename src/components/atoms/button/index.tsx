import React from 'react';
import {createUseStyles} from 'react-jss';

export interface ButtonProps{
    buttonName ?: string;
}

const useStyles=createUseStyles({
        buttonWrapper:{
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            height:'100%',
            width:'100%',
            padding:'5px 5px',
            minWidth:50,
            maxWidth:150,
            backgroundColor:'#101820ff',
            borderRadius:5,
            boxShadow:'1px 2px #010b13',
            cursor:'pointer',

            '& a':{
                textDecoration:'none',
                color:'white',
            },
          '&:hover':{
               backgroundColor:'#777777',
           }

        },

})

const Button:React.FC <ButtonProps> =(props)=>{
    const classes=useStyles();
    return(
        <div className={classes.buttonWrapper}>
        <a href="#">{props.buttonName}</a>
        </div>
    )
}


export default Button;