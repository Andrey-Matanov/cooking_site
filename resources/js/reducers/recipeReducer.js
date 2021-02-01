import update from 'react-addons-update'

import {
    FETCH_RECIPE,
} from "../actions/recipeActions";

const recipeObject = {
    recipe: {},
    ingredients: [],
    reviews: [],
};

export const recipeReducer = (recipe = recipeObject, action) => {
    switch (action.type) {
        case FETCH_RECIPE: {
            // recipe.recipe = action.payload.recipe[0];
            // recipe.ingredients = action.payload.ingredients;
            // recipe.reviews = action.payload.reviews;
            // return recipe;
            return update(recipe, {
                recipe: {$set: action.payload.recipe[0]},
                ingredients: {$set: action.payload.ingredients},
                reviews: {$set: action.payload.reviews}
            })
        }
        default: {
            return recipe;
        }
    }
};
