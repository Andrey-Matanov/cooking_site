import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import RecipeStepsList from "../components/PagesComponents/RecipePage/RecipeStepsList";
import { Container } from "@material-ui/core";
import { fetchRecipe } from "../actions/recipeActions.js";
import { useParams } from "react-router-dom";

const Recipe = ({ recipe, users, reviewsList, steps }) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchRecipe(id));
    }, []);

    if (recipe.recipe.name) {
        return (
            <Container maxWidth="md">
                <RecipeStepsList
                    recipe={recipe.recipe}
                    ingredients={recipe.ingredients}
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
    recipe: state.recipe,
    steps: state.recipe.steps,
    reviewsList: state.recipe.reviews,
    users: state.users,
});

export default connect(mapStateToProps)(Recipe);
