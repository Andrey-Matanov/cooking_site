export const ADD_RECIPE = "@@recipesList/ADD_RECIPE";
export const ADD_COMMENTARY = "@@recipesList/ADD_COMMENTARY";
export const FETCH_RECIPES = "@@recipesList/FETCH_RECIPES";
export const FETCH_CATEGORIES = "@@recipesList/FETCH_CATEGORIES";
export const FETCH_ERROR = "@@recipesList/FETCH_ERROR";
export const SUCCESS = "@@recipesList/SUCCESS";

const baseURL = window.location.origin;

export const addCommentary = (recipeId, text) => ({
    type: ADD_COMMENTARY,
    payload: {
        recipeId,
        text,
    },
});

export const fetchRecipes = (currentLastId) => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/nextrecipes/${currentLastId}`);
    const data = await response.json();

    dispatch({
        type: FETCH_RECIPES,
        payload: {
            recipes: data.recipes,
            isLastRecipes: data.isLastRecipes,
        },
    });
};

export const fetchCategories = () => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/categories`);
    const json = await response.json();

    dispatch({
        type: FETCH_CATEGORIES,
        payload: {
            recipes: json.recipes,
        },
    });
};

export const addRecipe = (recipe) => async (dispatch) => {
    const response = await fetch(`${baseURL}/api/addrecipe`, {
        method: "POST",
        body: JSON.stringify(recipe),
    });

    console.log(response);
    // const json = await response.json();

    dispatch({ type: SUCCESS });
};
