import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './movies.css'
const Movies = () =>{
    const [settings,setSettings]=useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    })
   return(
    <div>
    <h2> Single Item</h2>
    <Slider {...settings}>
      <div className="one" >
        <h3>1</h3>
      </div>
      <div >
        <h3>2</h3>
      </div>
      <div >
        <h3>3</h3>
      </div>
      <div >
        <h3>4</h3>
      </div>
      <div >
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
   )

}

export default Movies;