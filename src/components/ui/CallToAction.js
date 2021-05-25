import React from "react";
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToActionStyles from "./CallToActionStyles";

const CallToAction = props => {
    const classes = CallToActionStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container alignItems="center" justify={matchesSM ? "center" : "space-between"}
              className={classes.background} direction={matchesSM ? "columns" : "row"}>
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
    );
}

export default CallToAction;
