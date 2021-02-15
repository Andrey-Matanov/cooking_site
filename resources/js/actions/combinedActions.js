import { batch } from 'react-redux';
import { baseURL } from '../utils';
import { FETCH_INGREDIENTS } from './ingredientsAction';
import { FETCH_CATEGORIES } from './categoriesActions';
import { FETCH_RECIPES } from './recipesListActions';

export const FETCH_INGREDIENTS_AND_RECIPES = '@@combined/FETCH_INGREDIENTS_AND_RECIPES';
export const FETCH_RECIPES_AND_CATEGORIES = '@@combined/FETCH_RECIPES_AND_CATEGORIES';

export const fetchIngredientsAndRecipes = () => async (dispatch) => {
    const ingredientsResponse = await fetch(`${baseURL}/api/ingredients`);
    const ingredientsJson = await ingredientsResponse.json();
    const categoriesResponse = await fetch(`${baseURL}/api/categories`);
    const categoriesJson = await categoriesResponse.json();

    batch(() => {
        dispatch({
            type: FETCH_INGREDIENTS,
            payload: {
                ingredients: ingredientsJson.data,
            },
        });
        dispatch({
            type: FETCH_CATEGORIES,
            payload: {
                categories: categoriesJson,
            },
        });
    });
};

export const fetchRecipesAndCategories = (currentLastId) => async (dispatch) => {
    const recipesResponse = await fetch(`${baseURL}/api/nextrecipes/${currentLastId}`);
    const recipesJson = await recipesResponse.json();
    const categoriesResponse = await fetch(`${baseURL}/api/categories`);
    const categoriesJson = await categoriesResponse.json();

    batch(() => {
        dispatch({
            type: FETCH_RECIPES,
            payload: {
                recipes: recipesJson.recipes,
                isLastRecipes: recipesJson.isLastRecipes,
            },
        });
        dispatch({
            type: FETCH_CATEGORIES,
            payload: {
                categories: categoriesJson,
            },
        });
    });
};
