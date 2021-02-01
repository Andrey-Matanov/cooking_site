export const ADD_ARTICLE = '@@articles/ADD_ARTICLE';

export const addArticle = (recipe) => ({
    type: ADD_ARTICLE,
    payload: recipe,
});