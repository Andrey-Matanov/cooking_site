import {
    FETCH_USER_DATA,
    FETCH_USER_RECIPES,
    USERNAME_CHANGE,
    DELETE_USER,
} from "../actions/profileActions";

export const profileReducer = (
    profile = {
        userId: null,
        userName: null,
        userEmail: null,
        userRecipes: [],
    },
    action
) => {
    switch (action.type) {
        case FETCH_USER_DATA: {
            return {
                ...profile,
                userId: action.payload.userData.userId,
                userName: action.payload.userData.userName,
                userEmail: action.payload.userData.userEmail,
            };
        }
        case FETCH_USER_RECIPES: {
            return { ...profile, userRecipes: action.payload.userRecipes };
        }
        case USERNAME_CHANGE: {
            return {
                ...profile,
                userName: action.payload.name,
            };
        }
        case DELETE_USER: {
            return {
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
