import React from "react";
import {useTheme} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LandingPageStyles from "./LandingPageStyles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallToAction from "./ui/CallToAction";
import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const LandinPage = props => {
    const classes = LandingPageStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, //name animation
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            {/*---Hero Block---*/}
            <Grid item>
                {/*flex-end the animation right position and alignItems middle row */}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    {/*breakpoint tips when the window screen size and mobile split the information */}
                    <Grid sm item className={classes.heroTextContainer}>
                        {/*theme styles get h2*/}
                        <Typography variant="h2" align="center">
                            Bringing West Coast Technology <br/> to the Midwest
                        </Typography>
                        {/*center the buttons*/}
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button component={Link} to="/estimate" className={classes.estimateButton}
                                        variant="contained" onClick={() => props.setValue(5)}>
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/revolution" variant="outlined"
                                        className={classes.learnButtonHero} onClick={() => props.setValue(2)}>
                                    {/*space bewteen text button and arrow blue*/}
                                    <span style={{marginRight: 10}}>Lear More</span>
                                    {/*right arrow button*/}
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*breakpoint tips when the window screen size and mobile split the information */}
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
                    </Grid>
                </Grid>
            </Grid>
            {/*---Custom Software Block---*/}
            {/*when the is mobile the center the image and text */}
            <Grid container direction="row" justify={matchesSM ? "center" : undefined}
                  className={classes.serviceContainer}>
                {/*spaces between border and custom software with mediaQuery*/}
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                        Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Save Energy. Save Time. Save Money.
                    </Typography>
                    <Typography variant="subtitle1">
                        {/*spaces in text*/}
                        Complete digital solutions, from investigation to{" "} <span
                        className={classes.specialText}>celebration</span>
                    </Typography>
                    <Button component={Link} to="/customsoftware" variant="outlined" className={classes.learnButton}
                            onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(1);
                            }}>
                        <span style={{marginRight: 10}}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon}/>
                </Grid>
            </Grid>
            {/*---iOS/Android Block---*/}
            {/*when the is mobile the center the image and text */}
            <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"}
                  className={classes.serviceContainer}>
                {/*spaces between border and custom software with mediaQuery*/}
                <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                        iOS/Android App Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Extend Functionality. Extend Access. Increase Engagement.
                    </Typography>
                    <Typography variant="subtitle1">
                        Integrate your web experience or create standalone app
                        {matchesSM ? null : <br/>} with either mobile platform.
                    </Typography>
                    <Button component={Link} to="/mobilesapps" variant="outlined" className={classes.learnButton}
                            onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(2);
                            }}>
                        <span style={{marginRight: 10}}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                    <img className={classes.icon} alt="mobile phone icon" src={mobileAppsIcon}/>
                </Grid>
            </Grid>
            {/*---Website Block---*/}
            {/*when the is mobile the center the image and text */}
            <Grid container direction="row" justify={matchesSM ? "center" : undefined}
                  className={classes.serviceContainer}>
                {/*spaces between border and custom software with mediaQuery*/}
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                        Website Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Reach More. Discover More. Sell More.
                    </Typography>
                    <Typography variant="subtitle1">
                        Optimized for Search Engines, built for speed.
                    </Typography>
                    <Button component={Link} to="/websites" variant="outlined" className={classes.learnButton}
                            onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(3);
                            }}>
                        <span style={{marginRight: 10}}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                    </Button>
                </Grid>
                <Grid item>
                    <img className={classes.icon} alt="website icon" src={websitesIcon}/>
                </Grid>
            </Grid>
            {/*card design the revolution block*/}
            <Grid item>
                {/*space between website development and background*/}
                <Grid container style={{height: "100em", marginTop: "12em"}} alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign: "center"}}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary insights couple with cutting-edge technology is a recipe for
                                        revololution
                                    </Typography>
                                    <Button component={Link} to="/revolution" variant="outlined"
                                            className={classes.learnButtonHero} onClick={() => props.setValue(2)}>
                                        {/*space bewteen text button and arrow blue*/}
                                        <span style={{marginRight: 10}}>Lear More</span>
                                        {/*right arrow button*/}
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}/>
                </Grid>
            </Grid>
            {/*information block*/}
            <Grid item>
                <Grid container style={{height: "80em"}} alignItems="center" direction="row"
                      className={classes.infoBackground}>
                    {/*absolute position over background, direction change when is mobile or desktop*/}
                    <Grid item container style={{textAlign: matchesXS ? "center" : "inherit"}}
                          direction={matchesXS ? "column" : "row"}>
                        {/*align text when is desktop or mobile*/}
                        <Grid sm item style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}>
                            <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction="column">
                                {/*override style theme color*/}
                                <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                                <Typography variant="subtitle2">Let's get personal</Typography>
                                <Grid item>
                                    <Button component={Link} to="/about" variant="outlined"
                                            style={{color: "white", borderColor: "white"}}
                                            className={classes.learnButton} onClick={() => props.setValue(3)}>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*sm spaces available two grid item, control is mobile or dekstop*/}
                        <Grid sm item style={{
                            marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                            textAlign: matchesXS ? "center" : "right"
                        }}>
                            <Grid container direction="column">
                                {/*override style theme color*/}
                                <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                                <Typography variant="subtitle2">Say hello.!
                                    <span role="img" aria-label="waving hand">👍</span>
                                </Typography>
                                <Grid item>
                                    <Button component={Link} to="/contact" variant="outlined"
                                            style={{color: "white", borderColor: "white"}}
                                            className={classes.learnButton} onClick={() => props.setValue(4)}>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*Call To action block*/}
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}

export default LandinPage;
