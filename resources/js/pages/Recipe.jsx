import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import RecipeStepsList from "../components/PagesComponents/RecipePage/RecipeStepsList";
import { Container } from "@material-ui/core";
import { fetchRecipe } from "../actions/recipeActions.js";

const Recipe = ({ recipeId, recipe, users, reviewsList, steps }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchRecipe(
                Number(location.href.slice(location.href.lastIndexOf("/") + 1))
            )
        );
    }, []);

    const { reviews } = reviewsList;

    if (recipe.recipe.name) {
        return (
            <Container maxWidth="md">
                <RecipeStepsList
                    recipe={recipe.recipe}
                    ingredients={recipe.ingredients}
                    reviews={reviews}
                    steps={recipe.steps}
                />
            </Container>
        );
    } else {
        return <div></div>;
    }
};

const mapStateToProps = (state, ownProps) => ({
    recipeId: ownProps.id,
    recipe: state.recipe,
    steps: state.steps,
    // recipe: state.recipes.find((recipe) => recipe.id === ownProps.id),
    users: state.users,
    reviewsList: state.reviews,
});

export default connect(mapStateToProps)(Recipe);
