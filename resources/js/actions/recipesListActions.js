export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_COMMENTARY = "ADD_COMMENTARY";
export const RENDER_RECIPES = "RENDER_RECIPES";
export const FETCH_RECIPES = "FETCH_RECIPES";
export const FETCH_ERROR = "FETCH_ERROR";

export const addRecipe = (recipe) => ({
    type: ADD_RECIPE,
    payload: recipe,
});

export const renderRecipes = (count) => ({
    type: RENDER_RECIPES,
    payload: count,
});

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

export const fetchRecipes = () => async (dispatch) => {
    const baseURL = window.location.origin;
    console.log(baseURL);
    const response = await fetch(`${baseURL}/api/recipes`);
    const data = await response.json();

    dispatch({ type: FETCH_RECIPES, payload: data.recipes });
};
