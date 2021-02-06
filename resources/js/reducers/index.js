import { combineReducers } from "redux";
import { recipesListReducer } from "./recipesListReducer";
import { usersReducer } from "./usersReducer";
import { articlesListReducer } from "./articlesReducer.js";
import { recipeReducer } from "./recipeReducer.js";
import { reviewsReducer } from "./reviewsReducer.js";
import { ingredientsReducer } from "./ingredientsReducer";
import { categoriesReducer } from "./categoriesReducer";

export default combineReducers({
    recipesObject: recipesListReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    users: usersReducer,
    articles: articlesListReducer,
    recipe: recipeReducer,
    reviews: reviewsReducer,
});
