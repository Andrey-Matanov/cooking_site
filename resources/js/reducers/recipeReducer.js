import { FETCH_RECIPE } from "../actions/recipeActions";

const recipeObject = {
    recipe: {},
    ingredients: [],
    reviews: [],
};

export const recipeReducer = (recipe = recipeObject, action) => {
    switch (action.type) {
        case FETCH_RECIPE: {
            return {
                recipe: action.payload.recipe[0],
                ingredients: action.payload.ingredients,
                reviews: action.payload.reviews,
            };
        }
        default: {
            return recipe;
        }
    }
};
