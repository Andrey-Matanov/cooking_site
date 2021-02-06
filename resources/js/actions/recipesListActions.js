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

// export const fetchRecipes = () => {
//     return (dispatch) => {
//         return fetch("http://127.0.0.1:8000/api/recipes")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//                 dispatch({ type: FETCH_RECIPES, payload: data.recipes });
//             })
//             .catch((err) => dispatch({ type: FETCH_ERROR }));
//     };
// };

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
