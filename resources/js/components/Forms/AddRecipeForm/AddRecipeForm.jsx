import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
// import { addRecipe } from "../../actions/recipesListActions";
// import { updateUserRecipesIds } from "../../actions/usersActions";
import { fetchIngredients } from "../../../actions/ingredientsAction";
import AddRecipeFormStep from "./AddRecipeFormStep";
import AddRecipeFormIngredient from "./AddRecipeFormIngredient";
import { fetchCategories } from "../../../actions/categoriesActions";

const AddRecipeForm = styled.form`
    width: 500px;
`;

const FormItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const FormInput = styled.input`
    flex-basis: 100%;
`;

const FormTextarea = styled.textarea`
    flex-basis: 100%;
    resize: none;
`;

const AddRecipeFormik = ({ ingredients, categories, id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!ingredients.length) {
            dispatch(fetchIngredients());
        }

        if (!categories.length) {
            dispatch(fetchCategories());
        }
    }, [dispatch]);

    useEffect(() => {
        if (ingredients.length) {
            formik.setFieldValue("ingredients[0].name", ingredients[0].name);
        }
    }, [ingredients]);

    useEffect(() => {
        if (categories.length) {
            formik.setFieldValue("categories", categories[0].name);
        }
    }, [categories]);

    const formik = useFormik({
        initialValues: {
            name: "",
            category_id: 1,
            time: 0,
            difficulty: "1",
            ingredients: [
                {
                    name: "",
                    amount: 0,
                    unit_id: 1,
                },
            ],
            description: "",
            steps: [
                {
                    description: "",
                    image:
                        "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
                },
            ],
        },
        onSubmit: (values) => {
            const newRecipeId = "" + id;
            // const newRecipe = {
            //     newRecipeId,
            //     name,
            //     time,
            //     difficulty,
            //     description,
            // };

            // dispatch(updateUserRecipesIds(newRecipeId));
            // dispatch(addRecipe(newRecipe));

            // const newRecipe = {
            //     id: newRecipeId,
            //     name: values.name,
            //     time: values.time,
            //     difficulty: values.difficulty,
            //     description: values.description,
            //     steps: values.steps,
            // };

            console.log("test");
        },
    });

    return (
        <AddRecipeForm onSubmit={formik.handleSubmit}>
            <FormItem>
                <label htmlFor="name">Название</label>
                <FormInput
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    type="text"
                    id="name"
                />
            </FormItem>
            <FormItem>
                <label htmlFor="category">Категория</label>
                <select
                    value={formik.values.category_id}
                    onChange={formik.handleChange}
                    name="category_id"
                    id="category"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </FormItem>
            <FormItem>
                <label htmlFor="time">Время приготовления</label>
                <FormInput
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    name="time"
                    type="text"
                    id="time"
                />
            </FormItem>
            <FormItem>
                <label htmlFor="difficulty">Сложность приготовления</label>
                <select
                    value={formik.values.difficulty}
                    onChange={formik.handleChange}
                    id="difficulty"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </FormItem>
            <FormItem>
                <p>Состав рецепта</p>
                {formik.values.ingredients.map((ingredient, i) => (
                    <AddRecipeFormIngredient
                        key={i}
                        i={i}
                        name={ingredient.name}
                        amount={ingredient.amount}
                        handleChange={formik.handleChange}
                        ingredients={ingredients}
                    />
                ))}
                <button
                    onClick={() => {
                        formik.setFieldValue("ingredients", [
                            ...formik.values.ingredients,
                            {
                                name: ingredients[0].name,
                                amount: 0,
                                unit_id: 1,
                            },
                        ]);
                    }}
                    type="button"
                >
                    Добавить новый ингредиент
                </button>
            </FormItem>
            <FormItem>
                <label htmlFor="description">Описание рецепта</label>
                <FormTextarea
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    name="description"
                    id="description"
                />
            </FormItem>
            <FormItem>
                <p>Ход приготовления</p>
                <div className="steps">
                    {formik.values.steps.map(({ description, image }, i) => (
                        <AddRecipeFormStep
                            key={i}
                            number={i + 1}
                            description={description}
                            image={image}
                            handleChange={formik.handleChange}
                        />
                    ))}
                </div>
                <button
                    onClick={() => {
                        formik.setFieldValue("steps", [
                            ...formik.values.steps,
                            {
                                description: "",
                                image:
                                    "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
                            },
                        ]);
                    }}
                    type="button"
                >
                    Добавить новый шаг
                </button>
            </FormItem>
            <FormItem>
                <button
                    type="button"
                    onClick={() => console.log(formik.values)}
                >
                    Show values
                </button>
            </FormItem>
            <FormItem>
                <button type="submit">Добавить рецепт</button>
            </FormItem>
        </AddRecipeForm>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    categories: state.categories,
});

export default connect(mapStateToProps)(AddRecipeFormik);
