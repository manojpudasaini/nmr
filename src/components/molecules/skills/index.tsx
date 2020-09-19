import React from 'react';
import {createUseStyles} from 'react-jss';
import {Row,Col} from "antd";
import "antd/dist/antd.css";
import {FundProjectionScreenOutlined,AntDesignOutlined,ToolOutlined} from "@ant-design/icons";

const useStyle= createUseStyles({
    skillsWrapper:{
        margin:'20px 0px',
        height:500,
        fontFamily:`'Montserrat',sans-serif`,
    },
    skillsHeader:{
        margin:'50px 0px',
        textAlign:'center',
        fontSize:40,
        fontWeight:600,
        color:'#2c5f2d',
    },
    mainRow:{
        backgroundColor:'#101820ff',
        height:'100%',
        color:'#fff',
    },
    
    skillTitle:{
        fontSize:30,
        lineHeight:'64px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'10px 0px',
        '& p':{
          borderBottom:'1px solid #fff',
          fontWeight:500,
        },
       
        '& li':{
          listStyle:'none',
        },
    },
    frontEndIcon:{
        display:'block',
        fontSize:100,
    }

})

const Skills=()=>{
    const classes=useStyle();
    return(
    <div className={classes.skillsWrapper}>
        <div className={classes.skillsHeader}>
            What I Learnt<span>🚀🚀</span>
        </div>
    
    <Row className={classes.mainRow} gutter={{ xs: 1, sm: 16, md: 3, lg: 32 }}justify="space-between">
      <Col className="gutter-row" span={8} xs={8}>
        <div>
            <div className={classes.skillTitle}>
            <FundProjectionScreenOutlined className={classes.frontEndIcon}/>
               <p>FRONT-END</p> 
                <li>React JS</li>
                <li>Bootstrap</li>     
                <li>CSS3</li>
                <li>HTML5</li>                   
            </div>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div >
        <div className={classes.skillTitle}>
            <AntDesignOutlined className={classes.frontEndIcon}/>
               <p>BACK-END</p>
                <li>Firebase</li>
                <li>MySQL</li>     
                <li>MS SQL</li>    
        </div>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div ><div >
        <div className={classes.skillTitle}>
            <ToolOutlined className={classes.frontEndIcon}/>
                <p>TOOLS</p>
                <li>Github</li>
        </div>
        </div></div>
      </Col>
    </Row>
        </div>
    )
}


export default Skills;