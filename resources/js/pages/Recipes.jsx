import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipesList from "../components/RecipesList.jsx";
import {
    fetchRecipes,
    fetchCategories,
} from "../actions/recipesListActions.js";
import { Container, Box, Typography, Chip } from "@material-ui/core";

const Recipes = () => {
    const dispatch = useDispatch();
    const recipesList = useSelector((state) => state.recipesObject.recipes);
    const currentLastId = useSelector(
        (state) => state.recipesObject.currentLastId
    );

    useEffect(() => {
        if (!recipesList.length) dispatch(fetchRecipes(currentLastId));
    }, [dispatch]);

    const renderRecipes = (count) => {
        // renderRecipes(count);
    };

    return (
        <Container maxWidth="lg">
            <Box mt={3}>
                <Typography variant="h3">Рецепты</Typography>
            </Box>
            <Box my={3}>
                <Typography variant="h4">Категории</Typography>
                <Box></Box>
            </Box>
            {recipesList.length ? (
                <RecipesList
                    recipesList={recipesList}
                    loadRecipes={renderRecipes}
                />
            ) : (
                <div>Рецепты загружаются</div>
            )}
        </Container>
    );
};

export default Recipes;
