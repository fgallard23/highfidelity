import {makeStyles} from "@material-ui/styles";
import background from '../assets/background.jpg'

const ContatStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
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
}));

export default ContatStyles;
