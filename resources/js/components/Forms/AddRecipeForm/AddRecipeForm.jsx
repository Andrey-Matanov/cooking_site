import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { addRecipe } from "../../../actions/recipesListActions";
import AddRecipeFormStep from "./AddRecipeFormStep";
import AddRecipeFormIngredient from "./AddRecipeFormIngredient";
import FormTextarea from "../../Inputs/FormTextArea";
import FormInput from "../../Inputs/FormInput";
// import AddRecipeNutrition from "./AddRecipeNutrition";

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

    // const [recipeNutrition, setRecipeNutrition] = useState({
    //     calories: 0,
    //     proteins: 0,
    //     fat: 0,
    //     carbs: 0,
    // });

    useEffect(() => console.log("addRecipeForm rerender"));

    const ValidationSchema = Yup.object().shape({
        name: Yup.string().required("Название не должно быть пустым!"),
        time: Yup.number().positive(
            "Время приготовления не может равно меньше одной минуты!"
        ),
    });

    // const getNewIngredientId = () => {
    //     let newIngredientId = 1;
    //     const ingredients = formik.values.ingredients;

    //     while (true) {
    //         if (
    //             ingredients.find(
    //                 (ingredient) => ingredient.id === newIngredientId
    //             )
    //         ) {
    //             newIngredientId += 1;
    //         } else {
    //             break;
    //         }
    //     }

    //     return newIngredientId;
    // };

    return (
        <Formik
            initialValues={{
                name: "",
                category_id: 1,
                time: 0,
                difficulty: "1",
                ingredients: [],
                description: "",
                steps: [
                    {
                        name: "",
                        description: "",
                        image:
                            "https://imgholder.ru/600x300/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
                    },
                ],
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                console.log(values);
                dispatch(addRecipe(values));
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                setFieldValue,
                isValidating,
            }) => {
                return (
                    <Form>
                        <FormItem>
                            <label htmlFor="name">Название</label>
                            <Field
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                type="text"
                                id="name"
                            />
                            {errors.name && touched.name ? (
                                <div style={{ color: "red" }}>
                                    {errors.name}
                                </div>
                            ) : null}
                        </FormItem>
                        <FormItem>
                            <label htmlFor="category">Категория</label>
                            <Field
                                as="select"
                                value={values.category_id}
                                onChange={(e) =>
                                    setFieldValue(
                                        `category_id`,
                                        +e.target.value
                                    )
                                }
                                name="category_id"
                                id="category"
                            >
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </Field>
                        </FormItem>
                        <FormItem>
                            <label htmlFor="time">
                                Время приготовления(в минутах)
                            </label>
                            <Field
                                as="input"
                                type="number"
                                value={values.time}
                                onChange={handleChange}
                                name="time"
                                id="time"
                            />
                            {errors.time && touched.time ? (
                                <div style={{ color: "red" }}>
                                    {errors.time}
                                </div>
                            ) : null}
                        </FormItem>
                        <FormItem>
                            <label htmlFor="difficulty">
                                Сложность приготовления
                            </label>
                            <select
                                value={values.difficulty}
                                onChange={(e) =>
                                    setFieldValue(`difficulty`, +e.target.value)
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
                            {ingredients.length ? (
                                values.ingredients.map((ingredient, i) => (
                                    <AddRecipeFormIngredient
                                        key={i}
                                        currentNumber={i}
                                        currentId={ingredient.id}
                                        currentName={ingredient.name}
                                        currentAmount={ingredient.amount}
                                        ingredients={ingredients}
                                        usedIngredients={values.usedIngredients}
                                        unitId={ingredient.unit_id}
                                        handleChange={handleChange}
                                        setFieldValue={setFieldValue}
                                    />
                                ))
                            ) : (
                                <p>Ингредиенты загружаются...</p>
                            )}
                            <button
                                onClick={() => {
                                    setFieldValue("ingredients", [
                                        ...values.ingredients,
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
                            {/* {ingredients.length && (
                        <AddRecipeNutrition
                            values={values}
                            ingredients={ingredients}
                        />
                    )} */}
                        </FormItem>
                        <FormItem>
                            <label htmlFor="description">
                                Описание рецепта
                            </label>
                            <FormTextarea
                                value={values.description}
                                onChange={handleChange}
                                name="description"
                                id="description"
                            />
                        </FormItem>
                        <FormItem>
                            <p>Ход приготовления</p>
                            <div className="steps">
                                {values.steps.map(
                                    ({ name, description, image }, i) => (
                                        <AddRecipeFormStep
                                            key={i}
                                            number={i + 1}
                                            name={name}
                                            description={description}
                                            image={image}
                                            handleChange={handleChange}
                                        />
                                    )
                                )}
                            </div>
                            <button
                                onClick={() => {
                                    setFieldValue("steps", [
                                        ...values.steps,
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
                                onClick={() => console.log(values)}
                            >
                                Show values
                            </button>
                        </FormItem>
                        <FormItem>
                            <button type="submit">Добавить рецепт</button>
                        </FormItem>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AddRecipeFormik;
