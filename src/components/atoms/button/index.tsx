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
            backgroundColor:'#7c8ebf',
            borderRadius:5,
            boxShadow:'1px 2px #5b78c7',
            cursor:'pointer',

            '& a':{
                textDecoration:'none',
                color:'white',
            },
           

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