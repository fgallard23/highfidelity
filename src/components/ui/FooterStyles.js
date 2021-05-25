import {makeStyles} from "@material-ui/styles";

const FooterStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302, //its amazing because footer and header show in space mobile
        position: "relative",
    },

    adorment: {
        width: "25em", //height footer image
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em",
        }
    },

    mainContainer: {
        position: "absolute",//grid location top footer
    },

    link: {
        color: "white",
        fontFamily: "Arial",
        fontsize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none" //under line link
    },

    gridItem: {
        margin: "3em" //spaces between columns grid
    },

    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        }
    },

    socialContainer: {
        position: "absolute",
        marginTop: "-6em", //show icon social media
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        }
    }
}));

export default FooterStyles;
