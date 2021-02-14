import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipesList from '../components/RecipesList.jsx';
import { fetchRecipes } from '../actions/recipesListActions.js';
import { fetchRecipesAndCategories } from '../actions/combinedActions.js';

import { Container, Box, Typography, FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Recipes = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const recipesList = useSelector((state) => state.recipesObject.recipes);
    const currentLastId = useSelector(
        (state) => state.recipesObject.currentLastId
    );
    const isLastRecipes = useSelector(
        (state) => state.recipesObject.isLastRecipes
    );

    const categories = useSelector((state) => state.categories)

    const [previousLastId, setPreviousLastId] = useState(0);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        if (!recipesList.length) dispatch(fetchRecipesAndCategories(currentLastId)) //dispatch(fetchRecipes(currentLastId));
    }, [dispatch]);

    useEffect(() => {
        if (previousLastId !== 0) dispatch(fetchRecipes(currentLastId));
    }, [previousLastId]);

    const handleChange = (e) => {
        setCurrentCategory(e.target.value);
    }

    const renderRecipes = () => {
        setPreviousLastId(currentLastId + 10);
    };

    const renderCategoryOptions = (categories) => {
        return categories.map(item => (
            <option key={item.id} value={item.name}>{item.name}</option>
        ))
    }

    return (
        <Container maxWidth='lg'>
            <Box mt={3}>
                <Typography variant='h3'>Рецепты</Typography>
            </Box>
            <Box my={3}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Категория</InputLabel>
                    <Select
                    native
                    value={currentCategory}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                    >
                        <option aria-label="None" value="" />
                        {renderCategoryOptions(categories)}
                    </Select>
                </FormControl>
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
