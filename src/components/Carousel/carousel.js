import React from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import './carousel.css';
import Kalopothi from '../../assets/kalopothi.jpg';
import Kabaddi from '../../assets/kabaddi.jpg';
import Tvt from '../../assets/tvt.jpg';
import Loot from '../../assets/loot.jpg';
const Carousal = () => {
  return (
    <React.Fragment>
      <Carousel effect="fade" autoplay  dotPosition="bottom" effect='scrollx' >
        <div>   
          <img src={Kalopothi} alt="kalopothi-image"/>
        </div>
        <div>
          <img src={Kabaddi} alt="kabaddi-image"/>
        </div>
        <div> 
          <img src={Tvt} alt="tvt-image"/>
        </div>
        <div>
          <image src={Loot} alt="loot-image"/>
        </div>
      </Carousel>
    </React.Fragment>
  );
};
export default Carousal;
