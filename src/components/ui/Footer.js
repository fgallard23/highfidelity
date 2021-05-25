import React from "react";
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Hidden from "@material-ui/core/Hidden";

import FooterStyles from "./FooterStyles";

import footerAdorment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg'

const Footer = props => {
    const classes = FooterStyles();

    return (
        <footer className={classes.footer}>
            {/*mdDown all content inside hidding*/}
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    {/* Home column*/}
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(0)} to="/"
                                  className={classes.link}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* services column*/}
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(0)
                            }}
                                  to="/services"
                                  className={classes.link}>
                                Services
                            </Grid>
                            <Grid item component={Link} to="/customsoftware" onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(1)
                            }}
                                  className={classes.link}>
                                Custom Software Development
                            </Grid>
                            <Grid item component={Link} to="/mobileapps" onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(2)
                            }}
                                  className={classes.link}>
                                iOS/Android Development
                            </Grid>
                            <Grid item component={Link} to="/websites" onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(3)
                            }}
                                  className={classes.link}>
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*revolution column*/}
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution"
                                  className={classes.link}>
                                The Revolution
                            </Grid>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution"
                                  className={classes.link}>
                                Vision
                            </Grid>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution"
                                  className={classes.link}>
                                Technology
                            </Grid>
                            <Grid item component={Link} onClick={() => props.setValue(2)} to="/revolution"
                                  className={classes.link}>
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*about us column*/}
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about"
                                  className={classes.link}>
                                About Us
                            </Grid>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about"
                                  className={classes.link}>
                                History
                            </Grid>
                            <Grid item component={Link} onClick={() => props.setValue(3)} to="/about"
                                  className={classes.link}>
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*contact us column*/}
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} onClick={() => props.setValue(4)} to="/contact"
                                  className={classes.link}>
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="black decorative slash" src={footerAdorment} className={classes.adorment}/>
            {/*social media icons*/}
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src={instagram} className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
