import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import './Home.css';
import Box from "@mui/material/Box"
import { Typography, Switch, IconButton, Button, Divider } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { Card, CardMedia, CardActions, CardContent, Chip } from "@mui/material";
import { Drawer, Link } from "@mui/material";

import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import background from '../../images/background.jpeg';
import cv from '../../assets/cv.pdf'

import Name from "./components/Name"
import All from './components/All';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';

function Home() {
    const [tabValue, setTabValue] = useState("About");

    // Password toggle handler
    const handleTabChange = (event, newValue) => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        // console.log(event.target.innerHTML);
        // setTabValue(event.target.innerHTML);
        setTabValue(newValue);
    };

    // Show All logic, including NavBar
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = (event) => {
        setShowAll(!showAll);
    }
    /////////////////

    // Drawer Logic
    const [showDrawer, setDrawer] = useState(false);

    const toggleDrawer = (e) => {
        setDrawer(!showDrawer);
    }

    const closeDrawer = (e) => {
        setDrawer(false);
    }
    ////////////////


    // Scroll To Top logic
    const [scrollTopVis, setScrollTopVis] = useState(false);

    const toggleScrollTopVis = (event) => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 120){
            setScrollTopVis(true);
        }
        else {
            setScrollTopVis(false);
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    window.addEventListener("scroll", toggleScrollTopVis);
    //////////////////////////

    return (
        <div>
            {<Name />}
            
            <Button onClick={toggleDrawer} style={{ "position": "fixed", "top": "20px", "left": "20px", "backgroundColor": "#ebeceb" }} sx={{ boxShadow: 1 }} >
                <MenuRoundedIcon />
                &nbsp;
                More
            </Button>
            <Drawer
                variant="temporary"
                anchor="left"
                open={showDrawer}
                onClose={closeDrawer}
            >
                <Box sx={{width: 250, p: 5}}>
                    <Typography variant="h4" >
                        Contact
                    </Typography>
                    <br/>
                    <Link href={cv} target="_blank" style={{textDecoration: "none"}}>
                        <div className="Drawer-link">
                            <ArticleRoundedIcon /> &nbsp; &nbsp;
                            Resume
                        </div>
                    </Link>
                    <Link href="mailto: vieriharney@gmail.com" style={{textDecoration: "none"}}>
                        <div className="Drawer-link">
                            <MailRoundedIcon /> &nbsp; &nbsp;
                            Email
                        </div>
                    </Link>

                    <br/>
                    <Divider />
                    <br/>

                    <Typography variant="h4">
                        Social
                    </Typography>
                    <br/>
                    
                    <Link href="https://www.linkedin.com/in/vieriharney/" target="_blank" style={{textDecoration: "none"}}>
                        <div className="Drawer-link" >
                            <LinkedInIcon /> &nbsp; &nbsp;
                            LinkedIn
                        </div>
                    </Link>
                    <Link href="https://github.com/vharney" target="_blank" style={{textDecoration: "none"}}>
                        <div className="Drawer-link">
                            <GitHubIcon /> &nbsp; &nbsp;
                            GitHub
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/vieriharney" target="_blank" style={{textDecoration: "none"}}>
                        <div className="Drawer-link">
                        <InstagramIcon /> &nbsp; &nbsp;
                            Instagram
                        </div>    
                    </Link>
                    <Link href="admin" style={{textDecoration: "none"}}>
                        <div className="Drawer-link">
                            <FacebookIcon /> &nbsp; &nbsp;
                            Facebook
                        </div>
                    </Link>
                </Box>
            </Drawer>


            {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    View
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" onClick={toggleView} active>All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={toggleView}>About</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={toggleView}>Projects</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={toggleView}>Blog</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">My Contacts</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {(() => {
                switch (viewShown) {
                    case 'About':
                        return <About />
                    case 'Projects':
                        return <Projects />
                    case 'Blog':
                        return <Blog />
                    default:
                        return null
                }
            })()}   */}

            <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: 16 }} className="float-right mr-2 pr-3 mt-2" >
                <Switch onClick={toggleShowAll} />
                <span>
                    Show All
                </span>
            </Box>

            {
                // Navbar code
                (() => {
                    if (!showAll) {
                        return (
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mt-2">
                                <Tabs value={tabValue} onChange={handleTabChange}>
                                    <Tab label="About" value="About" sx={{'&.Mui-selected': {outline: 'none'}}} />
                                    <Tab label="Projects" value="Projects" sx={{'&.Mui-selected': {outline: 'none'}}} />
                                    <Tab label="Blog" value="Blog" sx={{'&.Mui-selected': {outline: 'none'}}} />
                                </Tabs>
                            </Box>
                        )
                    }
                })
                ()
            }
            
            {(() => {
                if (!showAll) {
                    switch (tabValue) {
                        case 'About':
                            return <About />
                        case 'Projects':
                            return <Projects />
                        case 'Blog':
                            return <Blog />
                        default:
                            return null
                    }
                }
                else {
                    return (
                        <div> 
                            <div style={{ marginTop : "50px"}}></div>
                            <About /> 
                            <Projects /> 
                            <Blog /> 
                        </div>
                    )
                }
            })()} 

            <Card sx={{ maxWidth: 345 }} className="Content-card" >
                <CardMedia
                    component="img"
                    height="140"
                    image={background}
                    alt="green iguana"
                    className="mb-3"
                />
                <Chip className="Tech-chip" label="REACT" />
                <Chip className="Tech-chip" label="MONGODB" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="Content-card" >
                <CardMedia
                    component="img"
                    height="140"
                    image={background}
                    alt="green iguana"
                    className="mb-3"
                />
                <Chip className="Tech-chip" label="REACT" />
                <Chip className="Tech-chip" label="MONGODB" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>



            {
                // Code for scroll to top button
                (() => {
                    if (scrollTopVis) {
                        return (
                            <div className="shadow" style={{"position": "fixed", "bottom": "20px", "right": "0px", backgroundColor: "lightGrey", "paddingRight": "30px", "paddingLeft": "5px", "borderRadius":"40px 0px 0 40px" }}>
                                <IconButton style={{   }} sx={{'&.Mui-selected': {outline: 'none'}}}  onClick={scrollToTop} >
                                    <KeyboardDoubleArrowUpRoundedIcon style={{fontSize: "40px", "color": "blue", "border": "1px solid blue", "borderRadius": "50%" }} sx={{'&.Mui-selected': {outline: 'none'}}} />
                                </IconButton>
                            </div>
                        )
                    }
                })
                ()
            }
        </div>
    );
}

export default Home;