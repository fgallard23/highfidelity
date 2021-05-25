import {makeStyles} from "@material-ui/core/styles";
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const LandingPageStyles = makeStyles(theme => ({
    //when rezise tha page, the SVG image is below the footer
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
        }
    },

    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },

    buttonContainer: {
        marginTop: "1em"
    },

    learnButtonHero: {
        ...theme.typography.learButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },

    learnButton: {
        ...theme.typography.learButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },

    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em",
        }
    },

    //class when resize the overlapping button
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },

    //celebration text
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },

    //space between text save energy ...... complete
    subtitle: {
        marginBottom: "1em",
    },

    //spaces between customSoftwareIcon and text
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0, //space border left and icon
        }
    },

    //space between bringin text ... custom software
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
        }
    },

    //background
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover", //cubrir all space disponible
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },

    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: { //remove padding space mobile
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },

    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover", //cubrir all space disponible
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }
}))

export default LandingPageStyles;
