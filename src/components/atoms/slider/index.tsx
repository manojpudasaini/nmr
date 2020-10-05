import React from 'react';
import {createUseStyles} from 'react-jss';

export interface ImageProps{
    imageUrl ?: string;
}

const useStyles= createUseStyles({
    imageWrapper:{
       marginRight:'auto',
       height:500, 
       width:'100%',
    },
})
const Slider:React.FC <ImageProps>=(props)=>{
    const classes=useStyles();
    return(
        <div >
            <div className={classes.imageWrapper}>
                <img src={props.imageUrl} alt="my-image" height='100%' width='100%'/> 
            </div>
        </div>
        
    )
}
export default Slider;
