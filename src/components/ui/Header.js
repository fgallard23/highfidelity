import React, {useState, useEffect, Fragment} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
//menu
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//resposive UI
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";
//drawer
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
//List
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from '../../assets/logo.svg';
import HeaderStyles from "./HeaderStyles";
import {ElevationScroll} from "./HeaderScript";

const Header = props => {
    const classes = HeaderStyles();
    //menu
    const [anchorEl, setAnchorEl] = useState(null);//anchor option of menu
    const [openMenu, setOpenMenu] = useState(false); //open and close menu
    //responsive UI
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md")); //media
    //drawer
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (e, newvalue) => props.setValue(newvalue);

    //display
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    //close
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    //clic submenu
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }

    //menu options
    const menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "iOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website", link: "/websites", activeIndex: 1, selectedIndex: 3}];

    //menu drawer
    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (e) => handleClick(e),
        },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3},
        {name: "Contact Us", link: "/contact", activeIndex: 4},
    ]

    useEffect(() => {
        //refresh page load same option
        [...menuOptions, ...routes].forEach(route => {
                switch (window.location.pathname) {
                    case `${route.link}`:
                        if (props.value !== route.activeIndex) {
                            props.setValue(route.activeIndex);
                            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                                props.setSelectedIndex(route.selectedIndex);
                            }
                        }
                        break;
                    case '/estimate':
                        props.setValue(5);
                        break;
                    default:
                        break;
                }
            }
        )
    }, [props.value, menuOptions, props.selectedIndex, routes]);

    //tabs desktop
    const tabs = (
        <Fragment>
            <Tabs value={props.value} onChange={handleChange} className={classes.tabContainer}
                  indicatorColor="secondary">
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}/>
                ))}
            </Tabs>
            <Button component={Link} to="/estimate" variant="contained" color="secondary" className={classes.button}
                    onClick={() => props.setValue(5)}>
                Free Estimate
            </Button>

            {/*menu anchor to services*/}
            <Menu id="simple-menu" anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                  classes={{paper: classes.menu}}
                  MenuListProps={{onMouseLeave: handleClose}}
                  elevation={0}
                  style={{zIndex: 1302}}
                  keepMounted>
                {menuOptions.map((option, index) => (
                    <MenuItem key={`${option}${index}`} component={Link} to={option.link}
                              classes={{root: classes.menuItem}}
                              onClick={(e) => {
                                  handleMenuItemClick(e, index);
                                  props.setValue(1);
                                  handleClose();
                              }} selected={index === props.selectedIndex && props.value === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )

    //drawer mobile
    const drawer = (
        <Fragment>
            {/*menu left of mobile*/}
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer}
                             onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
                             classes={{paper: classes.drawer}}>
                {/*very important because menu below*/}
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map((route) => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                            onClick={() => {
                                setOpenDrawer(false);
                                props.setValue(route.activeIndex)
                            }}>
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}

                    <ListItem className={classes.drawerItemEstimate} onClick={() => {
                        setOpenDrawer(false);
                        props.setValue(5)
                    }} divider
                              button
                              component={Link}
                              classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                              to="/estimate" selected={props.value === 5}>
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography>Free
                            Estimate </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            {/*Icon right of mobile horizontal lines*/}
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                <MenuIcon className={classes.drawIcon}/>
            </IconButton>
        </Fragment>
    )

    return (
        <Fragment>
            <ElevationScroll>
                {/*app fixed top page*/}
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/"
                                disableRipple
                                className={classes.logoContainer} onClick={() => props.setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        {/*mobile or desktop show tab or drawer */}
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </Fragment>
    );
}

export default Header;
