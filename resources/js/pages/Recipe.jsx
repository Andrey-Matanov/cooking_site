import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import RecipeStepsList from "../components/PagesComponents/RecipePage/RecipeStepsList";
import { Container } from "@material-ui/core";
import { fetchRecipe } from "../actions/recipeActions.js";
import { useParams } from "react-router-dom";

const Recipe = ({ status, recipe, ingredients, reviewsList, steps }) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchRecipe(id));
    }, []);

    switch (status) {
        case "loading": {
            return <h2>Рецепт загружается</h2>;
        }
        case "ok": {
            return (
                <Container maxWidth="md">
                    <RecipeStepsList
                        recipe={recipe}
                        ingredients={ingredients}
                        reviews={reviewsList}
                        steps={steps}
                    />
                </Container>
            );
        }
        case "failed": {
            return <h2>Такого рецепта не существует</h2>;
        }
    }
};

const mapStateToProps = (state) => ({
    status: state.recipe.status,
    recipe: state.recipe.recipe,
    ingredients: state.recipe.ingredients,
    steps: state.recipe.steps,
    reviewsList: state.recipe.reviews,
});

export default connect(mapStateToProps)(Recipe);
