import { UPDATE_USER_RECIPES_IDS, UPDATE_USER_ARTICLES_IDS } from '../actions/usersActions';

const usersList = [
    {
        id: 1,
        name: 'Admin',
        recipesIds: [],
        articlesIds: [],
        authorRating: 0,
    },
    {
        id: 2,
        name: 'Елена',
        recipesIds: ['1'],
        articlesIds: [],
        authorRating: 16,
    },
    {
        id: 3,
        name: 'Fjodor',
        recipesIds: ['2'],
        articlesIds: [],
        authorRating: 9,
    },
    {
        id: 4,
        name: 'Александр',
        recipesIds: [],
        articlesIds: [],
        authorRating: 0,
    },
    {
        id: 5,
        name: 'Роберт',
        recipesIds: [],
        articlesIds: [],
        authorRating: 0,
    },
];

export const usersReducer = (users = usersList, action) => {
    switch (action.type) {
        case UPDATE_USER_RECIPES_IDS: {
            users[0].recipesIds.push(action.payload);

            return users;
        }
        case UPDATE_USER_ARTICLES_IDS: {
            users[0].articlesIds.push(action.payload);

            return users;
        }
        default: {
            return users;
        }
    }
};
