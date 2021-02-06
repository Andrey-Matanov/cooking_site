export const FETCH_REVIEWS = "@@reviews/FETCH_REVIEWS";
export const FETCH_ERROR = "@@reviews/FETCH_ERROR";

export const fetchReviews = (id) => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = await fetch(`${baseURL}/api/reviews/${id}`);

    if (response) {
        const json = await response.json();

        dispatch({ type: FETCH_RECIPE, payload: json });
    } else {
        dispatch({ type: FETCH_ERROR });
    }
};
