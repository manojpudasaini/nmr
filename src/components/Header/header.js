import React from 'react';
import "./header.css";

const Header=()=>{
    return(
        <React.Fragment>
                <div className="container">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV Series</a></li>
                    </ul>
                </div>
        </React.Fragment>
    )
}
export default Header;