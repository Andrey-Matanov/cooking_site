import { combineReducers } from "redux";
import { recipesListReducer } from "./recipesListReducer";
import { usersReducer } from "./usersReducer";
import { articlesListReducer } from "./articlesReducer.js";
import { recipeReducer } from "./recipeReducer.js";
import { reviewsReducer } from "./reviewsReducer.js";
import { ingredientsReducer } from "./ingredientsReducer";

export default combineReducers({
    recipes: recipesListReducer,
    ingredients: ingredientsReducer,
    users: usersReducer,
    articles: articlesListReducer,
    recipe: recipeReducer,
    reviews: reviewsReducer,
});
