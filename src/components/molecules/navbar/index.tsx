import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { MenuOutlined } from "@ant-design/icons";
import Logo from '../../../assets/logo.png';
import Button from '../../atoms/button/index';
import * as Scroll from 'react-scroll';
const useStyles = createUseStyles({

    mainWrapper: {
        fontFamily: `'Montserrat',sans-serif`,
    },

    imageWrapper: {
        top: '2%',
        position: 'absolute',
        height: '10vh',
        '& img': {
            padding: '5px 15px',
            cursor: 'pointer',
        },
    },
    navWrapper: {
        height: '10vh',
        backgroundColor: '#080808',
    },

    navLinks: {
        display: 'flex',
        listStyle: 'none',
        width: '50%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 'auto',
        '& li a': {
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            '&:hover': {
                color: '#cc0000',
            },
            '&:active': {
                color: '#cc0000',
            },
        },

    },
    hamBurger: {
        display: 'none',
    },

    '@media (max-width: 768px)': {
        imageWrapper: {
            top: 0,
            position: 'absolute',
            height: '10vh',
            '& img': {
                padding: '5px 15px 0px 15px',
            },
        },
        navLinks: {
            zIndex: 100,
            display: 'flex',
            position: 'absolute',
            backgroundColor: '#080808',
            top: '10%',
            right: 0,
            height: '100vh',
            width: '50%',
            flexDirection: 'column',
            transition: 'all 0.6s ease-out',
            paddingBottom:30,
            '& li a': {
                fontSize: '0.9rem',
            },
        },
        nav: {
            position: 'relative',
        },
        hamBurger: {
            zIndex: 2,
            display: 'block',
            position: 'absolute',
            color: 'white',
            cursor: 'pointer',
            fontSize: 30,
            right: '5%',
            top: '3%',
            transform: 'translate(-5%,-3%)',
        },
    }

})

const Responsivenav = () => {
    const classes = useStyles();
    const [showNav, setShowNav] = useState(true);
    let scroll = Scroll.animateScroll;
    const updateWidth = () => {
        if (window.innerWidth > 768) {
            setShowNav(true)
        }
        else {
            setShowNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth)
    }, [])

    const togglehandler = () => {
        if (showNav) {
            setShowNav(false)
        } else setShowNav(true)
    }
    return (
        <div className={classes.mainWrapper} >
            <div className={classes.imageWrapper}>
                <a href="/"><img src={Logo} width='200px' /></a>
            </div>

            <nav className={classes.navWrapper}>
                <MenuOutlined className={classes.hamBurger} onClick={togglehandler} />
                {showNav ?
                    <ul className={classes.navLinks}>
                        <li onClick={() => { scroll.scrollTo(530);  }}><a>Skills</a></li>
                        <li onClick={() => { scroll.scrollTo(1030);  }}><a>Work</a></li>
                        <li onClick={() => { scroll.scrollTo(1600);  }}><a>About Me</a></li>
                        <li onClick={() => { scroll.scrollToBottom(); }}><a>Let's Connect</a></li>
                        
                    </ul> : null}
            </nav>
        </div>
    )
}


export default Responsivenav;