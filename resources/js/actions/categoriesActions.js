import { baseURL } from '../utils';

export const FETCH_CATEGORIES = '@@catalog/FETCH_CATEGORIES';

export const fetchCategories = () => async (dispatch) => {
    const response = await fetch(`${baseURL}/api/catalog`);
    const json = await response.json();

    dispatch({
        type: FETCH_CATEGORIES,
        payload: {
            categories: json,
        },
    });
};
