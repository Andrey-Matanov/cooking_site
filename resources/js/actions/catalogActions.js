export const FETCH_CATALOG = "@@catalog/FETCH_CATALOG";

export const fetchCatalog = () => async (dispatch) => {
    const baseURL = window.location.origin;
    const response = fetch(`${baseURL}/catalog`);
    const catalog = await response.json();

    dispatch({ type: FETCH_CATALOG, payload: catalog.data });
};
