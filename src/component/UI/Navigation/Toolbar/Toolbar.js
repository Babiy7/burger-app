import React from "react";
import classes from "./Toolbar.module.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  hide: {
    display: "none"
  }
}));

const MenuButton = props => {
  const style = useStyles();
  const mobileViewPort = useMediaQuery("(min-width:500px)");
  return (
    <IconButton
      className={clsx(mobileViewPort && style.hide)}
      color="inherit"
      onClick={props.clicked}
    >
      <MenuIcon />
    </IconButton>
  );
};

const Toolbar = props => (
  <div className={classes.Toolbar}>
    <MenuButton {...props} />
    <Logo />
    <ul className={classes.DesktopOnly}>
      <NavigationItems />
    </ul>
  </div>
);

export default Toolbar;
