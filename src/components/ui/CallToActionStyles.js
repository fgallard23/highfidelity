import {makeStyles} from "@material-ui/styles";
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const CallToActionStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },

    //background
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover", //cubrir all space disponible
        backgroundAttachment: "fixed", //beautifull effect with image
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        },
    },

    estimatedButtom: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 250,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0,
        }
    }
}));

export default CallToActionStyles;

