import { FETCH_USERS } from "../actions/usersActions";

export const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH_USERS: {
            return action.payload.users;
        }
        default: {
            return users;
        }
    }
};
