import {createMuiTheme} from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const Theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none", //normal case
            fontWeight: 700, //bold
            fontSize: "1rem", //14point
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },

        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5 //space between lines with <br/>
        },

        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue,
        },

        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700,
        },

        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey,
        },

        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300,
        },

        learButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold"
        },
    }
})

export default Theme;