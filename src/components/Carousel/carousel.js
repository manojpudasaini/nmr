import React from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import './carousel.css';
import Img from '../../assets/_RUP1975.JPG';
const Carousal = () => {
  return (
    <React.Fragment>
      <Carousel effect="fade" autoplay  dotPosition="bottom" effect='scrollx' >
        <div>
          <h3>1</h3>
       
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </React.Fragment>
  );
};
export default Carousal;
