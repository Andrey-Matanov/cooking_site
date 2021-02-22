import {
    FETCH_USER_DATA,
    GET_USER_DATA_BY_TOKEN,
    FETCH_USER_RECIPES,
    USER_LOGOUT,
    USERNAME_CHANGE,
    DELETE_USER,
} from "../actions/profileActions";

export const profileReducer = (
    profile = {
        userLoggedIn: false,
        userId: null,
        userName: null,
        userEmail: null,
        userRecipes: [],
    },
    action
) => {
    switch (action.type) {
        case FETCH_USER_DATA:
        case USERNAME_CHANGE: {
            return {
                ...profile,
                userName: action.payload.name,
            }
        }
        case GET_USER_DATA_BY_TOKEN: {
            return {
                ...profile,
                userLoggedIn: true,
                userId: action.payload.userData.userId,
                userName: action.payload.userData.userName,
                userEmail: action.payload.userData.userEmail,
            };
        }
        case FETCH_USER_RECIPES: {
            return { ...profile, userRecipes: action.payload.userRecipes };
        }
        case USER_LOGOUT, DELETE_USER: {
            return {
                userLoggedIn: false,
                userId: null,
                userName: null,
                userEmail: null,
                userRecipes: [],
            };
        }
        default: {
            return profile;
        }
    }
};
