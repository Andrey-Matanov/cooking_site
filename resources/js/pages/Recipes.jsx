import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipesList from '../components/RecipesList.jsx';
import {
    fetchRecipes,
    fetchCategories,
} from '../actions/recipesListActions.js';
import { Container, Box, Typography, Chip } from '@material-ui/core';

const Recipes = () => {
    const dispatch = useDispatch();
    const recipesList = useSelector((state) => state.recipesObject.recipes);
    const currentLastId = useSelector(
        (state) => state.recipesObject.currentLastId
    );
    const isLastRecipes = useSelector(
        (state) => state.recipesObject.isLastRecipes
    );

    const [previousLastId, setPreviousLastId] = useState(0);

    useEffect(() => {
        if (!recipesList.length) dispatch(fetchRecipes(currentLastId));
    }, [dispatch]);

    useEffect(() => {
        if (previousLastId !== 0) dispatch(fetchRecipes(currentLastId));
    }, [previousLastId]);

    const renderRecipes = () => {
        setPreviousLastId(currentLastId + 10);
    };

    return (
        <Container maxWidth='lg'>
            <Box mt={3}>
                <Typography variant='h3'>Рецепты</Typography>
            </Box>
            <Box my={3}>
                <Typography variant='h4'>Категории</Typography>
                <Box></Box>
            </Box>
            {recipesList.length ? (
                <RecipesList
                    recipesList={recipesList}
                    loadRecipes={renderRecipes}
                    isLast={isLastRecipes}
                    currentLastId={currentLastId}
                />
            ) : (
                <div>Рецепты загружаются</div>
            )}
        </Container>
    );
};

export default Recipes;
