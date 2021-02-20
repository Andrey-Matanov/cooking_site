import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import IconButton from '@material-ui/core/IconButton';
import Menu from "./Menu";
import MenuAuthorized from "./MenuAuthorized";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../../utils";
import { getUserDataByToken } from "../../../../actions/profileActions";
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxHeight: "10vh",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    const userLoggedIn = useSelector((state) => state.profile.userLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.localStorage.getItem("currentUserToken") && !userLoggedIn) {
            dispatch(getUserDataByToken());
        }
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <div className="wrapper">
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                            Coolинари
                        </Typography>
                        {window.localStorage.getItem("currentUserToken") ? (
                            <MenuAuthorized />
                        ) : (
                            <Menu />
                        )}
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    );
};

export default Header;
