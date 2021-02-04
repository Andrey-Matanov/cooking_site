import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../actions/recipesListActions.js";
import { Button, Grid } from "@material-ui/core";
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
    buttonContainer: {
        textAlign: "center",
    },
}));

const RecipesList = (props) => {
    const dispatch = useDispatch();
    const currentLastId = useSelector(
        (state) => state.recipesObject.currentLastId
    );
    const isLastRecipes = useSelector(
        (state) => state.recipesObject.isLastRecipes
    );
    const classes = useStyles();
    const { recipesList, renderRecipes } = props;

    const loadRecipesInner = (count) => {
        // loadRecipes(3);
    };

    const renderRecipesList = () => {
        if (recipesList || recipesList.length == 0) {
            return recipesList.map((item) => {
                console.log(item);
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
            >
                {renderRecipesList()}
                {/* <Grid item xs={12} className={classes.buttonContainer}>
                        <Button color='primary' variant='contained' onClick={() => {loadRecipesInner(3)}}>
                            Больше рецептов!
                        </Button>
                    </Grid> */}
                {!isLastRecipes && (
                    <button
                        onClick={() => dispatch(fetchRecipes(currentLastId))}
                    >
                        Загрузить еще
                    </button>
                )}
            </Grid>
        </div>
    );
};

export default RecipesList;
