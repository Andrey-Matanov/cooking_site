import axios from "axios";
import { baseURL } from "../utils";

export const FETCH_USERS = "@@users/FETCH_USERS";

export const fetchUsers = () => async (dispatch) => {
    const response = await axios.get(`${baseURL}/api/users`);

    dispatch({
        type: FETCH_USERS,
        payload: {
            users: response.data.data,
        },
    });
};
