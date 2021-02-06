export const FETCH_CATEGORIES = "@@catalog/FETCH_CATEGORIES";

export const fetchCategories = () => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/catalog`);
    console.log(response);
    const json = await response.json();
    console.log(json);

    dispatch({
        type: FETCH_CATEGORIES,
        payload: {
            categories: json,
        },
    });
};
