import produce from "immer";
import {
    ADD_COMMENTARY,
    ADD_RECIPE,
    FETCH_RECIPES,
} from "../actions/recipesListActions";

const recipesList = [];

export const recipesListReducer = (
    recipesObject = {
        recipes: [],
        currentLastId: 0,
        isLastRecipes: false,
    },
    action
) => {
    switch (action.type) {
        case FETCH_RECIPES: {
            return {
                ...recipesObject,
                recipes: [...recipesObject.recipes, ...action.payload.recipes],
                currentLastId: recipesObject.currentLastId + 10,
                isLastRecipes: action.payload.isLastRecipes == true,
            };
        }
        case ADD_RECIPE: {
            return produce(recipes, (newRecipes) => {
                newRecipes.push({
                    id: "" + (recipes.length + 1),
                    ...action.payload,
                    author: "Admin",
                    image: "https://via.placeholder.com/150/aba",
                    rating: 0,
                    commentaries: [],
                });
            });
        }
        case ADD_COMMENTARY: {
            const { recipeId, text } = action.payload;

            return produce(recipes, (newRecipes) => {
                newRecipes
                    .find((recipe) => recipe.id === recipeId)
                    .commentaries.push({
                        id: 5,
                        authorId: 1,
                        text,
                    });
            });
        }
        default: {
            return recipesObject;
        }
    }
};
