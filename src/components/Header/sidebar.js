import React from 'react'
import './header.css'

const Sidebar=()=>{
    return(
        <React.Fragment>
            <div className='side-wrapper'>
                <a href="#" className="button-style">Movies</a>
                <a href="#" className="button-style">TV Series</a>
            </div>
        </React.Fragment>
    )
}
export  default Sidebar