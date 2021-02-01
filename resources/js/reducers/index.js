import { combineReducers } from 'redux';
import { recipesListReducer } from './recipesListReducer';
import { usersReducer } from './usersReducer';
import { articlesListReducer } from './articlesReducer.js'
import { recipeReducer } from './recipeReducer.js'
import { reviewsReducer } from './reviewsReducer.js'

export default combineReducers({
    recipes: recipesListReducer,
    users: usersReducer,
    articles: articlesListReducer,
    recipe: recipeReducer,
    reviews: reviewsReducer,
});
