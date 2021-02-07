import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
import { fetchIngredients } from "../../../actions/ingredientsAction";
import { fetchCategories } from "../../../actions/categoriesActions";
import { addRecipe } from "../../../actions/recipesListActions";
import AddRecipeFormStep from "./AddRecipeFormStep";
import AddRecipeFormIngredient from "./AddRecipeFormIngredient";
import FormTextarea from "../../Inputs/FormTextArea";
import FormInput from "../../Inputs/FormInput";
import AddRecipeNutrition from "./AddRecipeNutrition";

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

const AddRecipeFormik = ({ ingredients, categories }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!ingredients.length) {
            dispatch(fetchIngredients());
        }

        if (!categories.length) {
            dispatch(fetchCategories());
        }
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            name: "",
            category_id: 1,
            time: 0,
            difficulty: "1",
            ingredients: [
                {
                    id: 1,
                    amount: 0,
                    unit_id: 1,
                },
            ],
            description: "",
            steps: [
                {
                    name: "",
                    description: "",
                    image:
                        "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
                },
            ],
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(addRecipe(values));
        },
    });

    const usedIngredients = [];

    formik.values.ingredients.forEach((ingredient) =>
        usedIngredients.push(ingredient.id)
    );

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
                    onChange={(e) =>
                        formik.setFieldValue(`category_id`, +e.target.value)
                    }
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
                <label htmlFor="time">Время приготовления(в минутах)</label>
                <FormInput
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    name="time"
                    type="number"
                    id="time"
                />
            </FormItem>
            <FormItem>
                <label htmlFor="difficulty">Сложность приготовления</label>
                <select
                    value={formik.values.difficulty}
                    onChange={(e) =>
                        formik.setFieldValue(`difficulty`, +e.target.value)
                    }
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
                        id={ingredient.id}
                        name={ingredient.name}
                        amount={ingredient.amount}
                        ingredients={ingredients}
                        unitId={ingredient.unit_id}
                        handleChange={formik.handleChange}
                        setFieldValue={formik.setFieldValue}
                    />
                ))}
                <button
                    onClick={() => {
                        formik.setFieldValue("ingredients", [
                            ...formik.values.ingredients,
                            {
                                id: 1,
                                amount: 0,
                                unit_id: 1,
                            },
                        ]);
                    }}
                    type="button"
                >
                    Добавить новый ингредиент
                </button>
                {ingredients.length && (
                    <AddRecipeNutrition
                        values={formik.values}
                        ingredients={ingredients}
                    />
                )}
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
                    {formik.values.steps.map(
                        ({ name, description, image }, i) => (
                            <AddRecipeFormStep
                                key={i}
                                number={i + 1}
                                name={name}
                                description={description}
                                image={image}
                                handleChange={formik.handleChange}
                            />
                        )
                    )}
                </div>
                <button
                    onClick={() => {
                        formik.setFieldValue("steps", [
                            ...formik.values.steps,
                            {
                                name: "",
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

export default AddRecipeFormik;
