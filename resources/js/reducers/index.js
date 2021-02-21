import { combineReducers } from "redux";
import { recipesListReducer } from "./recipesListReducer";
import { usersReducer } from "./usersReducer";
import { articlesListReducer } from "./articlesReducer.js";
import { recipeReducer } from "./recipeReducer.js";
import { reviewsReducer } from "./reviewsReducer.js";
import { ingredientsReducer } from "./ingredientsReducer";
import { categoriesReducer } from "./categoriesReducer";
import { profileReducer } from "./profileReducers";
import { ratingReducer } from "./ratingReducer";

export default combineReducers({
    recipesObject: recipesListReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    users: usersReducer,
    rating: ratingReducer,
    profile: profileReducer,
    articles: articlesListReducer,
    recipe: recipeReducer,
    reviews: reviewsReducer,
});
