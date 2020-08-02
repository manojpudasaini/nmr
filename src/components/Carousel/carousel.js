import React from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import './carousel.css';
import Img from '../../assets/life.jpg';
import Butterfly from "../../assets/butterfly.png";
const Carousal = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel effect="fade" autoplay  dotPosition="bottom" effect='scrollx' >
        <div style={{height:'600px' }} >
          <img className="carousel-image" src={Img} alt="life-image"/>
          <div className="info">
          <p>Et amet proident commodo ad do aliqua laborum. Incididunt nulla non ad ipsum consectetur occaecat eiusmod elit. Velit dolor enim ea minim id.</p>
          </div>
          
        </div>
        <div>
          <img className="carousel-image" src={Butterfly} alt="butterfly-image"/>
        </div>
      </Carousel>
    </div>
  );
};
export default Carousal;
