export const FETCH_RECIPE = "@@recipe/FETCH_RECIPE";
export const FETCH_ERROR = "@@recipe/FETCH_ERROR";

const baseURL = window.location.origin;

export const fetchRecipe = (id) => async (dispatch) => {
    const response = await fetch(`${baseURL}/api/recipes/${id}`);
    const json = await response.json();

    dispatch({
        type: FETCH_RECIPE,
        payload: {
            recipe: json.recipe,
            ingredients: json.ingredients,
            steps: json.steps,
            reviews: json.reviews,
        },
    });
};
