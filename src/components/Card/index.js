import React from 'react';
import {Card,Typography,Rate} from 'antd';
import 'antd/dist/antd.css';
import './card.css';
import Kabaddi from '../../assets/kabaddi.jpg'

const {Meta} = Card;
const {Title} = Typography;
const MCard = () =>{
    return(
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Kabaddi}/>}
  >
    <Meta title="Kabaddi" description={[
        <p>www.instagram.com</p>
    ]} />
    <Rate allowHalf defaultValue={2.5} />
   </Card>
    )
}

export default MCard;