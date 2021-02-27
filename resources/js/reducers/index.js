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
import { authorizationReducer } from "./authorizationReducer";
import { unitsReducer } from "./unitsReducer";

export default combineReducers({
    authorization: authorizationReducer,
    recipesObject: recipesListReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    users: usersReducer,
    rating: ratingReducer,
    profile: profileReducer,
    articles: articlesListReducer,
    recipe: recipeReducer,
    reviews: reviewsReducer,
    units: unitsReducer,
});
