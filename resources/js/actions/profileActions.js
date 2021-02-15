import { baseURL } from "../utils";

export const FETCH_USER_RECIPES = "@@profile/FETCH_USER_RECIPES";

export const fetchUserRecipes = (authorId) => async (dispatch) => {
    const response = await fetch(
        `${baseURL}/api/recipes?author_id=${authorId}`
    );
    const json = await response.json();

    dispatch({
        type: FETCH_USER_RECIPES,
        payload: {
            userRecipes: json.recipes,
        },
    });
};
