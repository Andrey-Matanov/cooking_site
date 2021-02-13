import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import RecipeIcon from "./Icons/RecipeIcon";

import { makeStyles } from "@material-ui/core/styles";

const LinkDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Heading = styled.p`
    color: green;
`;

const useStyles = makeStyles((theme) => ({
    menu: {
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
    },
    "menu a": {
        textDecoration: "none",
        color: "black",
        padding: "0 20px",
    },

    selected_link: {
        color: "#999",
    },
}));

const Menu = () => {
    const classes = useStyles();

    return (
        <div className={classes.menu}>
            <NavLink exact to="/" activeClassName={classes.selected_link}>
                <LinkDiv>
                    <HomeIcon color="secondary" />
                    <Heading>Главная</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink to="/recipes" activeClassName={classes.selected_link}>
                <LinkDiv>
                    <RecipeIcon color="secondary" />
                    <Heading>Рецепты</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink to="/authors" activeClassName={classes.selected_link}>
                <LinkDiv>
                    <RecipeIcon color="secondary" />
                    <Heading>Рейтинг авторов</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink to="/profile/1" activeClassName={classes.selected_link}>
                <LinkDiv>
                    <RecipeIcon color="secondary" />
                    <Heading>Личный кабинет</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink
                exact
                to="/articles"
                activeClassName={classes.selected_link}
            >
                <LinkDiv>
                    <HomeIcon color="secondary" />
                    <Heading>Все статьи</Heading>
                </LinkDiv>
            </NavLink>
            <NavLink
                exact
                to="/welcomePage"
                activeClassName={classes.selected_link}
            >
                <LinkDiv>
                    <HomeIcon color="secondary" />
                    <Heading>Логин</Heading>
                </LinkDiv>
            </NavLink>
        </div>
    );
};

export default Menu;
