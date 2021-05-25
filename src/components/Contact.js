import React, {useState} from "react";
import {useTheme} from "@material-ui/styles";
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ContatStyles from "./ContactStyles";

import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Contact = props => {
    const classes = ContatStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Grid container direction="row">
            {/*two columns (lg) split the screen or dimentions for each */}
            {/*center of the row*/}
            <Grid item container direction="column" justify="center" lg={3}>
                <Grid item>
                    <Typography variant="h2" style={{lineHeight: 1}}> Contact Us </Typography>
                    <Typography variant="body1" style={{color: theme.palette.common.blue}}>We're waiting.</Typography>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue}}>(555) 555
                            555</Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        {/*bottom vertical align with the text*/}
                        <img src={emailIcon} alt="envelope" style={{marginRight: "0.5em", verticalAlign: "bottom"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                                    style={{color: theme.palette.common.blue}}>fgallard23@gmail.com</Typography>
                    </Grid>
                </Grid>
                {/**/}
                <Grid item container>
                    <Grid item>
                        <TextField label="Name" id="name" value={name}
                                   onChange={(e) => setName(e.target.value)}></TextField>
                    </Grid>
                    <Grid item>
                        <TextField label="Email" id="email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}></TextField>
                    </Grid>
                    <Grid item>
                        <TextField label="Phone" id="phone" value={phone}
                                   onChange={(e) => setPhone(e.target.value)}></TextField>
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField value={message} multiline id="message"
                               rows={10}
                               onChange={(e) => setMessage(e.target.value)}></TextField>
                </Grid>
                <Grid item>
                    <Button variant="contained">Send Message
                        <img src={airplane} alt="paper airplane"/>
                    </Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} alignItems="center" lg={9}>
                <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2">Simple Software. <br/>Revolution</Typography>
                            <Typography variant="subtitle2" style={{fontSize: "1.5em"}}>Take advantage of the
                                21st</Typography>
                            <Grid container justify={matchesSM ? "center" : undefined} item>
                                <Button component={Link} to="/revolution" variant="outlined"
                                        className={classes.learnButton} onClick={() => props.setValue(2)}>
                                    <span style={{marginRight: 5}}>Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/estimate" variant="contained" className={classes.estimatedButtom}
                            onClick={() => props.setValue(5)}>Free
                        Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Contact;
