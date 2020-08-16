import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './movies.css'
import Mcard from "../Card/index";
const Movies = () =>{
    const [settings,setSettings]=useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay : true,
        
    })
   return(
    <div style={{width:"100%", paddingLeft:'6%'}}>
    <Slider {...settings} style={{width:"97%"}}>
      <div >
      <Mcard/>
      </div>
      <div >
      <Mcard/>
      </div>
      <div >
      <Mcard/>
      </div>
      <div >
      <Mcard/>
      </div>
      <div >
      <Mcard/>
      </div>
      <div>
      <Mcard/>
      </div>
      <div>
      <Mcard/>
      </div>
      <div>
      <Mcard/>
      </div>
      <div>
      <Mcard/>
      </div>
      <div>
      <Mcard/>
      </div>
      <div>
      <Mcard/>
      </div>

    </Slider>
  </div>
   )

}

export default Movies;