import axios from "axios";
import { baseURL } from "../utils";

export const USERS_LOADING = "@@users/USER_LOADING";
export const FETCH_USERS = "@@users/FETCH_USERS";
export const CLEAR_USERS = "@@user/CLEAR_USERS";

export const fetchUsers = () => async (dispatch) => {
    dispatch({
        type: USERS_LOADING,
    });

    const token = window.localStorage.getItem("currentUserToken");
    const response = await axios.get(`${baseURL}/api/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    dispatch({
        type: FETCH_USERS,
        payload: {
            users: response.data.data,
        },
    });
};

export const clearUsers = () => ({
    type: CLEAR_USERS,
});
