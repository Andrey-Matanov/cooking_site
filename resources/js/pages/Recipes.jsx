import React, { useEffect } from "react";
import { connect } from "react-redux";
import RecipesList from "../components/RecipesList.jsx";
import { fetchRecipes, fetchCategories } from "../actions/recipesListActions.js";
import { Container, Box, Typography, Chip } from '@material-ui/core'

const Recipes = ({ recipesList, fetchRecipes }) => {
    useEffect(() => {
        fetchRecipes();
    }, []);

    const renderRecipes = (count) => {
        // renderRecipes(count);
    };

    return (
        <Container maxWidth='lg'>
            <Box mt={3}><Typography variant='h3'>Рецепты</Typography></Box>
            <Box my={3}>
                <Typography variant='h4'>Категории</Typography>
                <Box>
                    
                </Box>
            </Box>
            <RecipesList recipesList={recipesList} loadRecipes={renderRecipes} />
            {/* {recipesList ? (
                <div>
                    {recipesList.map((recipe, i) => (
                        <div
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                marginBottom: "10px",
                            }}
                            key={recipe.id}
                        >
                            <p>№ {i + 1}</p>
                            <p>Название: {recipe.name}</p>
                            <p>Описание: {recipe.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Рецепты загружаются</div>
            )} */}
        </ Container>
    );
};

const mapStateToProps = (state) => ({
    recipesList: state.recipes,
});

export default connect(mapStateToProps, { fetchRecipes })(
    Recipes
);
