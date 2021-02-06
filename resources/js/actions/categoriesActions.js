export const FETCH_CATEGORIES = "@@catalog/FETCH_CATEGORIES";

export const fetchCategories = () => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/catalog`);
    const json = await response.json();

    dispatch({
        type: FETCH_CATEGORIES,
        payload: {
            categories: json,
        },
    });
};
