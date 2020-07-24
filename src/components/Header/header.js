import React, { useState } from 'react';
import "./header.css";
import Sidebar from './sidebar'
import MenuIcon from '../../assets/menu-icon.png';

const Header=()=>{
    const [showSidebar,setShowSidebar]=useState(false);
   const onSidebarHandler=()=>{
       if(!showSidebar){
           setShowSidebar(true);
       }
       else{
            setShowSidebar(false);
       }

    }
    return(
        <React.Fragment>
                <div className="container">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV Series</a></li>
                    </ul>
                    <div className="menu-icon">
                        <img src={MenuIcon} alt="menuicon" onClick={onSidebarHandler}/>
                    </div>
                </div>
                {showSidebar ? <Sidebar/>:null

                                             
                
                
                
                }
                
        </React.Fragment>
    )
}
export default Header;