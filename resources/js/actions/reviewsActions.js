export const FETCH_REVIEWS = "@@reviews/FETCH_RECIPE";
export const FETCH_ERROR = "@@reviews/FETCH_ERROR";

export const fetchRecipe = (id) => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/reviews/${id}`);
    const data = await response.json();

    dispatch({ type: FETCH_RECIPE, payload: data });
};