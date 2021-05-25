import {makeStyles} from "@material-ui/styles";

const HeaderStyles = makeStyles(theme => ({
    //text below logo
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em", //content show bottom
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down("xs")]: { //phones
            marginBottom: "1.25em",
        }
    },

    logo: {
        height: "8em", //height logo
        [theme.breakpoints.down("md")]: {
            height: "7em",
        },
        [theme.breakpoints.down("xs")]: { //phones
            height: "5.5em",
        }
    },

    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },

    tabContainer: {
        marginLeft: 'auto' //align left
    },

    tab: {
        ...theme.typography.tab, //heritage of theme
        minWidth: 10, //space between menus
        marginLeft: "25px",
    },

    button: {
        ...theme.typography.estimate,
        borderRadius: "50px", //round border button
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },

    menu: {
        backgroundColor: theme.palette.common.blue, // menu color same background
        color: "white", // color letter
        borderRadius: "10px"
    },

    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        }
    },

    drawIcon: {
        height: "50px",
        width: "50px",
    },

    drawerIconContainer: {
        marginLeft: "auto",//left position
        "&:hover": {
            backgroundColor: "transparent",
        }
    },

    drawer: {
        backgroundColor: theme.palette.common.blue,
    },

    drawerItem: {
        ...theme.typography.tab,
        color: "white", //color text
        opacity: 0.7
    },

    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
    },

    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        },
    },

    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));

export default HeaderStyles;
