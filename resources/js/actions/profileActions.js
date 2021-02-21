import axios from "axios";
import { baseURL } from "../utils";

export const FETCH_USER_DATA = "@@profile/FETCH_USER_DATA";
export const GET_USER_DATA_BY_TOKEN = "@@profile/GET_USER_DATA_BY_TOKEN";
export const FETCH_USER_RECIPES = "@@profile/FETCH_USER_RECIPES";
export const USER_LOGOUT = "@@profile/USER_LOGOUT";

export const fetchUserData = (userData) => ({
    type: FETCH_USER_DATA,
    payload: {
        userData,
    },
});

export const getUserDataByToken = () => async (dispatch) => {
    const token = window.localStorage.getItem("currentUserToken");
    const response = await axios.get(`${baseURL}/api/get-user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    dispatch({
        type: GET_USER_DATA_BY_TOKEN,
        payload: {
            userData: {
                userId: response.data.user.id,
                userName: response.data.user.name,
                userEmail: response.data.user.email,
            },
        },
    });
};

export const fetchUserRecipes = (authorId) => async (dispatch) => {
    const response = await fetch(
        `${baseURL}/api/recipes?author_id=${authorId}`
    );
    const json = await response.json();

    dispatch({
        type: FETCH_USER_RECIPES,
        payload: {
            userRecipes: json.recipes,
        },
    });
};

export const userLogout = () => ({
    type: USER_LOGOUT,
});
