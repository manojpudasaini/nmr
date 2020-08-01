import React from 'react';
import {Card,Typography} from 'antd';
import 'antd/dist/antd.css';
import './card.css';

const {Meta} = Card;
const {Title} = Typography;
const MCard = () =>{
    return(
    <Card
    hoverable
    title ={<Title clasName="ti" level = {4} >Movie</Title>}
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description={[
        <p>www.instagram.com</p>,
        <p className="facebook">www.facebook.com</p>
    ]} />
   </Card>
    )
}

export default MCard;