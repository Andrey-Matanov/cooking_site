import produce from "immer";
import {
    ADD_COMMENTARY,
    ADD_RECIPE,
    FETCH_RECIPES,
    RENDER_RECIPES,
} from "../actions/recipesListActions";

const recipesList = [
    // {
    //     id: "1",
    //     name: "Шарлотка",
    //     author: "Елена",
    //     time: 20,
    //     difficulty: 2,
    //     description:
    //         "Если просто, шарлотка - яблочный пирог. Хотя этот пирог и называется шарлотка, рецепт приготовления его очень напоминает яблочный бисквит. Что касается названия шарлотки, существует...",
    //     image: "https://via.placeholder.com/150/aaa",
    //     rating: 16,
    //     commentaries: [
    //         {
    //             id: 1,
    //             authorId: 3,
    //             text: "Отличный рецепт Шарлотки!",
    //         },
    //         {
    //             id: 3,
    //             authorId: 5,
    //             text: "Спасибо за хороший рецепт!",
    //         },
    //     ],
    // },
    // {
    //     id: "2",
    //     name: "Бефстроганов",
    //     author: "Fjodor",
    //     time: 100,
    //     difficulty: 7,
    //     description:
    //         "Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.",
    //     image: "https://via.placeholder.com/150/aba",
    //     rating: 9,
    //     commentaries: [
    //         {
    //             id: 2,
    //             authorId: 2,
    //             text: "Отличный рецепт Бефстроганова!",
    //         },
    //         {
    //             id: 4,
    //             authorId: 4,
    //             text: "Мне не понравился рецепт!",
    //         },
    //     ],
    // },
    // {
    //     id: "3",
    //     name: "Тикка-масала",
    //     author: "Fjodor",
    //     time: 60,
    //     difficulty: 6,
    //     description:
    //         "Тикка-масала с лепешками наан в индийской кухне занимает примерно то же место, что в украинской борщ с пампушками, — то есть фактически центральное. Основную часть списка ингредиентов ...",
    //     image: "https://via.placeholder.com/150/bba",
    //     rating: 10,
    //     commentaries: [
    //         {
    //             id: 5,
    //             authorId: 4,
    //             text: "Первый!11",
    //         },
    //         {
    //             id: 6,
    //             authorId: 2,
    //             text: "Класс!",
    //         },
    //         {
    //             id: 7,
    //             authorId: 5,
    //             text: "Сложно...",
    //         },
    //     ],
    // },
];

export const recipesListReducer = (recipes = [], action) => {
    switch (action.type) {
        case ADD_RECIPE: {
            return produce(recipes, (newRecipes) => {
                newRecipes.push({
                    id: "" + (recipes.length + 1),
                    ...action.payload,
                    author: "Admin",
                    image: "https://via.placeholder.com/150/aba",
                    rating: 0,
                    commentaries: [],
                });
            });
        }
        case ADD_COMMENTARY: {
            const { recipeId, text } = action.payload;

            return produce(recipes, (newRecipes) => {
                newRecipes
                    .find((recipe) => recipe.id === recipeId)
                    .commentaries.push({
                        id: 5,
                        authorId: 1,
                        text,
                    });
            });
        }
        case FETCH_RECIPES: {
            return action.payload;
        }
        case RENDER_RECIPES: {
            //Заглушка - данные будут с сервера, условия не будет
            let tempAddedRecipes = [];
            switch (recipes[recipes.length - 1].id) {
                case "3": {
                    tempAddedRecipes = [
                        {
                            id: "4",
                            name: "Фрикасе",
                            author: "Елена",
                            time: 30,
                            difficulty: 4,
                            description:
                                "Вкусный сливочный соус с кусочками куриного филе. Ещё один рецепт, в котором куриное филе выступает в выигрышном варианте. Благодаря сливочному соусу, куриное филе получается очень нежным и ...",
                            image: "https://via.placeholder.com/150/abd",
                            rating: 6,
                            commentaries: [
                                {
                                    id: 8,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт",
                                },
                                {
                                    id: 8,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт",
                                },
                            ],
                        },
                        {
                            id: "5",
                            name: "Бефстроганов",
                            author: "Fjodor",
                            time: 100,
                            difficulty: 7,
                            description:
                                "Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.",
                            image: "https://via.placeholder.com/150/aba",
                            rating: 9,
                            commentaries: [
                                {
                                    id: 2,
                                    authorId: 2,
                                    text: "Отличный рецепт Бефстроганова!",
                                },
                                {
                                    id: 4,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт!",
                                },
                            ],
                        },
                        {
                            id: "6",
                            name: "Бефстроганов",
                            author: "Fjodor",
                            time: 100,
                            difficulty: 7,
                            description:
                                "Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.",
                            image: "https://via.placeholder.com/150/aba",
                            rating: 9,
                            commentaries: [
                                {
                                    id: 2,
                                    authorId: 2,
                                    text: "Отличный рецепт Бефстроганова!",
                                },
                                {
                                    id: 4,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт!",
                                },
                            ],
                        },
                    ];
                    break;
                }
                case "6": {
                    tempAddedRecipes = [
                        {
                            id: "7",
                            name: "Бефстроганов",
                            author: "Fjodor",
                            time: 100,
                            difficulty: 7,
                            description:
                                "Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.",
                            image: "https://via.placeholder.com/150/aba",
                            rating: 9,
                            commentaries: [
                                {
                                    id: 2,
                                    authorId: 2,
                                    text: "Отличный рецепт Бефстроганова!",
                                },
                                {
                                    id: 4,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт!",
                                },
                            ],
                        },
                        {
                            id: "8",
                            name: "Бефстроганов",
                            author: "Fjodor",
                            time: 100,
                            difficulty: 7,
                            description:
                                "Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.",
                            image: "https://via.placeholder.com/150/aba",
                            rating: 9,
                            commentaries: [
                                {
                                    id: 2,
                                    authorId: 2,
                                    text: "Отличный рецепт Бефстроганова!",
                                },
                                {
                                    id: 4,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт!",
                                },
                            ],
                        },
                        {
                            id: "9",
                            name: "Бефстроганов",
                            author: "Fjodor",
                            time: 100,
                            difficulty: 7,
                            description:
                                "Для бефстроганов из говядины со сметаной подойдет практически любой выруб мяса. Если хотите избежать процесса отбивания, то надо взять мясо получше и нарезать его потоньше.",
                            image: "https://via.placeholder.com/150/aba",
                            rating: 9,
                            commentaries: [
                                {
                                    id: 2,
                                    authorId: 2,
                                    text: "Отличный рецепт Бефстроганова!",
                                },
                                {
                                    id: 4,
                                    authorId: 4,
                                    text: "Мне не понравился рецепт!",
                                },
                            ],
                        },
                    ];
                    break;
                }
                default: {
                    tempAddedRecipes = [];
                }
            }
            if (tempAddedRecipes.length !== 0) {
                return [
                    ...recipes,
                    tempAddedRecipes[0],
                    tempAddedRecipes[1],
                    tempAddedRecipes[2],
                ];
            } else {
                return recipes;
            }
        }
        default: {
            return recipes;
        }
    }
};
