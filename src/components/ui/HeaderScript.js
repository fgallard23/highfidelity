//overlapping two surfaces
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {cloneElement} from "react";

export const ElevationScroll = props => {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}
