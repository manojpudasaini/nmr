import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { FundProjectionScreenOutlined, AntDesignOutlined, ToolOutlined } from "@ant-design/icons";

const useStyle = createUseStyles({
    skillsWrapper: {
        margin: '20px 0px 0px',
        fontFamily: `'Montserrat',sans-serif`,
    },
    skillsHeader: {
        margin: '25px 0px',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 600,
        lineHeight:'64px',
        color: '#AB274F',
        
    },
    mainRow: {
        backgroundColor: '#101820ff',
        height: '100%',
        color: '#fff',
    },

    skillTitle: {
        fontSize: 30,
        fontWeight:600,
        lineHeight: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 0px',
        '& p': {
            borderBottom: '1px solid #fff',
            
        },

        '& li': {
            fontSize:20,
            fontWeight:400,
            listStyle: 'none',
        },
    },
    frontEndIcon: {
        display: 'block',
        fontSize: 100,
    }

})

const Skills = () => {
    const classes = useStyle();
    return (
        <div className={classes.skillsWrapper}>
            <div className={classes.skillsHeader}>
                What I Learnt<span>🚀🚀</span>
                <div style={{height:'3px',width:"380px",margin:"0 auto",backgroundColor:'#248760'}}>

                </div>
            </div>

            <Row className={classes.mainRow}>
                <Col span={8} xs={24} lg={8} md={8} >
                    <div>
                        <div className={classes.skillTitle}>
                            <FundProjectionScreenOutlined className={classes.frontEndIcon} />
                            <p>FRONT-END</p>
                            <li>React JS</li>
                            <li>Bootstrap</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" md={8} xs={24} lg={8} span={8}>
                    <div >
                        <div className={classes.skillTitle}>
                            <AntDesignOutlined className={classes.frontEndIcon} />
                            <p>BACK-END</p>
                            <li>Firebase</li>
                            <li>MySQL</li>
                            <li>MS SQL</li>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" lg={8} xs={24} md={8} span={8}>
                    <div ><div >
                        <div className={classes.skillTitle}>
                            <ToolOutlined className={classes.frontEndIcon} />
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