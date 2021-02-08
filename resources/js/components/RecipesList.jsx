import React, { useState, useRef } from "react";
import { Grid, Box, CircularProgress, Fab } from "@material-ui/core";
import UpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles";
import RecipeItem from "../components/RecipeItem.jsx";

const useStyles = makeStyles((theme) => ({
    scrolling: {
        height: "70vh",
        paddingRight: "20px",
        paddingLeft: "20px",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
            display: "block",
            width: "5px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#bfbfbf99",
            borderRadius: "2.5px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#afb3b5",
            borderRadius: "2.5px",
        },
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(6),
        right: theme.spacing(6),
    },
}));

const RecipesList = ({ recipesList, loadRecipes, isLast }) => {

    const classes = useStyles();

    const [isScrolled, setIsScrolled] = useState(false);

    const scrollingArea = useRef(null)

    const loadRecipesInner = () => {
        loadRecipes();
    }

    const scrollUp = () => {
        scrollingArea.current.scrollTop = 0;
    }

    const scrollingHandler = (e) => {
        let clientHeight = e.target.clientHeight;
        let scrollHeight = e.target.scrollHeight;
        let scrollTop = e.target.scrollTop;

        if (!isLast && (scrollHeight - scrollTop - clientHeight) < 50) {
            loadRecipesInner()
        }

        if (scrollTop > clientHeight) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    const renderRecipesList = () => {
        if (recipesList || recipesList.length == 0) {
            return recipesList.map((item) => {
                return (
                    <Grid item xs={12} key={item.id}>
                        <RecipeItem
                            id={item.id}
                            name={item.name}
                            author="Author"
                            time={item.time}
                            complexity={item.complexity}
                            rating={item.rating}
                            description={item.description}
                            image={item.image}
                        />
                    </Grid>
                );
            });
        } else {
            return <div>{"No recipes :-("}</div>;
        }
    };

    return (
        <div>
            <Grid
                style={{ height: "60vh" }}
                container
                className={classes.scrolling}
                spacing={5}
                onScroll={scrollingHandler}
                ref = {scrollingArea}
            >
                {renderRecipesList()}
                {(!isLast) ? (
                <Grid item xs={12}>
                    <Box justifyContent="center" display="flex">
                        <CircularProgress color="primary" />
                    </Box>
                </Grid>
                ) : null}
            </Grid>
            {(isScrolled) ? (
                <Fab aria-label="Up" className={classes.fab} color="primary" onClick={scrollUp}>
                <UpIcon />
            </Fab>) : null}
        </div>
    );
};

export default RecipesList;
