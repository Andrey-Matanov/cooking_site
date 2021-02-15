import { FETCH_USER_RECIPES } from "../actions/profileActions";

const profileReducer = (profile = { recipes: [] }, action) => {
    switch (action.type) {
        case FETCH_USER_RECIPES: {
            return { ...profile, recipes: action.payload.userRecipes };
        }
        default: {
            return profile;
        }
    }
};

export default profileReducer;
