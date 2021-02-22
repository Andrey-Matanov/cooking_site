import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import RecipeStepsList from "../components/PagesComponents/RecipePage/RecipeStepsList";
import { Container } from "@material-ui/core";
import { fetchRecipe } from "../actions/recipeActions.js";
import { useParams } from "react-router-dom";

const Recipe = ({ recipe, ingredients, reviewsList, steps }) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchRecipe(id));
    }, []);

    if (recipe) {
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
    } else {
        return <div></div>;
    }
};

const mapStateToProps = (state) => ({
    recipe: state.recipe.recipe,
    ingredients: state.recipe.ingredients,
    steps: state.recipe.steps,
    reviewsList: state.recipe.reviews,
});

export default connect(mapStateToProps)(Recipe);
