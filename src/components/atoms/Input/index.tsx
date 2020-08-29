import React from 'react';
import {createUseStyles} from 'react-jss';
export interface InputProps{
    type :string
    placeholder ?:string
    onChange :(e :React.ChangeEvent<HTMLInputElement>)=>void
    value : string
}

const useStyles=createUseStyles({
    inputMain:{
        color:"red",
        fontSize:16,
        padding:'3px 4px 3px 5px',

    },
    

})
const Input:React.FC<InputProps>=(props)=>{
    const classes=useStyles();
    return (
        <div>
            <input className={classes.inputMain} value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder}/>
        </div>
    )

}

export default Input;