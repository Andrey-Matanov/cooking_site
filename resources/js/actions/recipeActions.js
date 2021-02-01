export const FETCH_RECIPE = "@@recipe/FETCH_RECIPE";
export const FETCH_ERROR = "@@recipe/FETCH_ERROR";

export const fetchRecipe = (id) => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/recipes/${id}`);
    const data = await response.json();

    dispatch({ type: FETCH_RECIPE, payload: data });
};