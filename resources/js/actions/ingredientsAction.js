export const FETCH_INGREDIENTS = "@@ingredients/FETCH_INGREDIENTS";

export const fetchIngredients = () => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/ingredients`);
    console.log(response);
    const ingredients = await response.json();

    dispatch({ type: FETCH_INGREDIENTS, payload: ingredients.data });
};
