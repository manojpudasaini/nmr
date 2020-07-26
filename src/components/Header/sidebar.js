import React from 'react'
import './header.css'

const Sidebar=()=>{
    return(
        <React.Fragment>
            <div className='side-wrapper'>
                <div>
                <a className='nav' href="/">Home</a>
                <a className='nav' href="/">Movies</a>
                <a className='nav' href="/">Series</a>
                </div>
            </div>
        </React.Fragment>
    )
}
export  default Sidebar