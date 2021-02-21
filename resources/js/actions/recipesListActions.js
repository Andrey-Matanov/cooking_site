import { baseURL } from "../utils";

export const ADD_RECIPE = "@@recipesList/ADD_RECIPE";
export const ADD_COMMENTARY = "@@recipesList/ADD_COMMENTARY";
export const FETCH_RECIPES = "@@recipesList/FETCH_RECIPES";
export const FETCH_CATEGORIES = "@@recipesList/FETCH_CATEGORIES";
export const FETCH_ERROR = "@@recipesList/FETCH_ERR";
export const CATEGORY_CHANGE = "@@recipesList/CATEGORY_CHANGE";
export const FETCH_SUCCESS = "@@recipesList/FETCH_SUCCESS";
export const FETCH_STARTED = "@@recipesList/FETCH_STARTED";


export const addCommentary = (recipeId, userId, text) => async (dispatch) => {
    try {
        const response = await fetch(`${baseURL}/api/reviews`, {
            method: "POST",
            body: JSON.stringify({recipe_id: recipeId, author_id: userId, description: text}),
        });
        const data = await response.json();
        console.log(data);
        dispatch({ type: FETCH_SUCCESS });
    } catch (err) {
        dispatch({ type: FETCH_ERROR });
    }
};

export const fetchRecipes = (currentLastId, category = "") => async (
    dispatch
) => {
    const response = await fetch(
        `${baseURL}/api/recipes/?amount=10&last=${currentLastId}&category=${category}`
    );
    const data = await response.json();

    console.log(data);

    dispatch({
        type: FETCH_RECIPES,
        payload: {
            recipes: data.recipes,
            isLastRecipes: data.isLastRecipes,
        },
    });
};

export const fetchCategories = () => async (dispatch) => {
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
    const response = await fetch(`${baseURL}/api/recipes`, {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
                "currentUserToken"
            )}`,
        },
    });

    console.log(response);
    // const json = await response.json();

    dispatch({ type: SUCCESS });
};

export const switchCategory = (newCategory) => async (dispatch) => {
    dispatch({
        type: CATEGORY_CHANGE,
        payload: {
            currentCategory: newCategory,
        },
    });
};
