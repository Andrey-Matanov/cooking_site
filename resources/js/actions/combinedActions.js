import { batch } from 'react-redux';
import { baseURL } from '../utils';
import { FETCH_INGREDIENTS } from './ingredientsAction';
import { FETCH_CATEGORIES } from './categoriesActions';

export const FETCH_INGREDIENTS_AND_RECIPES = 'FETCH_INGREDIENTS_AND_RECIPES';

export const fetchIngredientsAndRecipes = () => async (dispatch) => {
    const ingredientsResponse = await fetch(`${baseURL}/api/ingredients`);
    const ingredientsJson = await ingredientsResponse.json();
    const categoriesResponse = await fetch(`${baseURL}/api/catalog`);
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
