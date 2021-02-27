import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { addRecipe, editRecipe } from "../../../actions/recipesListActions";
import AddRecipeFormStep from "./AddRecipeFormStep";
import AddRecipeFormIngredient from "./AddRecipeFormIngredient";
import FormTextarea from "../../Inputs/FormTextArea";
import FormInput from "../../Inputs/FormInput";
import {
    fetchUserData,
    fetchUserRecipes,
    getUserDataByToken,
} from "../../../actions/profileActions";
import { useHistory } from "react-router-dom";
import { baseURL } from "../../../utils";
import AddImageField from "./AddImageField";
// import AddRecipeNutrition from "./AddRecipeNutrition";

const AddRecipeForm = styled.form`
    width: 500px;
`;

const Error = styled.div`
    color: red;
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

const AddRecipeFormik = ({
    ingredients,
    categories,
    units,
    formInitialValues,
    submitButtonLabel,
    additionalInfo,
}) => {
    console.log("ingredients: ", ingredients);
    console.log("categories: ", categories);
    console.log("formInitialValues: ", formInitialValues);
    console.log("units: ", units);

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUserId = useSelector((state) => state.authorization.userId);

    const [recipeNutrition, setRecipeNutrition] = useState({
        calories: 0,
        proteins: 0,
        fat: 0,
        carbs: 0,
    });

    useEffect(() => {
        console.log("addRecipeForm rerender");
    });

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Название не должно быть пустым"),
        category_id: Yup.number().required(),
        time: Yup.number()
            .positive("Время приготовления не может быть меньше одной минуты")
            .required("Введите оценочное время приготовления рецепта"),
        difficulty: Yup.string().required(),
        ingredients: Yup.array()
            .of(
                Yup.object().shape({
                    id: Yup.number().required(),
                    amount: Yup.number()
                        .min(1, "Количество не может быть меньше 1")
                        .required("Введите количество"),
                    unit_id: Yup.number().required(),
                })
            )
            .min(1, "Добавьте как минимум один ингредиент"),
        description: Yup.string().required("Описание не должно быть пустым"),
        steps: Yup.array()
            .of(
                Yup.object().shape({
                    name: Yup.string().required(
                        "Название должно состоять минимум из одного символа"
                    ),
                    description: Yup.string().required(
                        "Описание должно состоять минимум из одного символа"
                    ),
                    image: Yup.string(),
                })
            )
            .min(1, "Добавьте как минимум один шаг"),
    });

    const handleImageChange = (e) => {};

    return (
        <Formik
            initialValues={{ ...formInitialValues, authorId: currentUserId }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                switch (additionalInfo.type) {
                    case "edit": {
                        dispatch(editRecipe(values, additionalInfo.recipeId));
                        break;
                    }
                    case "add": {
                        dispatch(addRecipe(values));
                        break;
                    }
                }

                dispatch(fetchUserRecipes(currentUserId));
                history.push(`/profile/${currentUserId}`);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                setFieldValue,
            }) => {
                const getNewIngredientId = () => {
                    let newIngredientId = 1;
                    const ingredients = values.ingredients;

                    while (true) {
                        if (
                            ingredients.find(
                                (ingredient) =>
                                    ingredient.id === newIngredientId
                            )
                        ) {
                            newIngredientId += 1;
                        } else {
                            break;
                        }
                    }

                    return newIngredientId;
                };

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
                                <Error>{errors.name}</Error>
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
                            <p>Изображение: </p>
                            <AddImageField
                                image={values.image}
                                formFieldName="image"
                                setFieldValue={setFieldValue}
                            />
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
                                <Error>{errors.time}</Error>
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
                                values.ingredients.map((ingredient, i) => {
                                    return (
                                        <AddRecipeFormIngredient
                                            key={i}
                                            currentNumber={i}
                                            currentId={ingredient.id}
                                            currentName={
                                                ingredients.find(
                                                    (item) =>
                                                        item.id ===
                                                        ingredient.id
                                                ).name
                                            }
                                            currentAmount={ingredient.amount}
                                            ingredients={ingredients}
                                            errors={errors.ingredients}
                                            usedIngredients={values.ingredients}
                                            unitId={ingredient.unit_id}
                                            handleChange={handleChange}
                                            setFieldValue={setFieldValue}
                                        />
                                    );
                                })
                            ) : (
                                <p>Ингредиенты загружаются...</p>
                            )}
                            {errors.ingredients &&
                            touched.ingredients &&
                            typeof errors.ingredients === "string" ? (
                                <Error>{errors.ingredients}</Error>
                            ) : null}
                            <button
                                onClick={() => {
                                    setFieldValue("ingredients", [
                                        ...values.ingredients,
                                        {
                                            id: getNewIngredientId(),
                                            amount: 1,
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
                            {errors.description && touched.description ? (
                                <Error>{errors.description}</Error>
                            ) : null}
                        </FormItem>
                        <FormItem>
                            <p>Ход приготовления</p>
                            <div className="steps">
                                {values.steps.map((step, i) => (
                                    <AddRecipeFormStep
                                        key={i}
                                        index={i}
                                        name={step.name || step.heading}
                                        description={step.description}
                                        image={step.image}
                                        errors={errors.steps}
                                        handleChange={handleChange}
                                        setFieldValue={setFieldValue}
                                        removeCurrentStep={() => {
                                            setFieldValue(
                                                "steps",
                                                [...values.steps].filter(
                                                    (step, j) => j !== i
                                                )
                                            );
                                        }}
                                    />
                                ))}
                            </div>
                            {errors.steps &&
                            touched.steps &&
                            typeof errors.steps === "string" ? (
                                <Error>{errors.steps}</Error>
                            ) : null}
                            <button
                                onClick={() =>
                                    setFieldValue("steps", [
                                        ...values.steps,
                                        {
                                            name: "",
                                            description: "",
                                            image: "",
                                        },
                                    ])
                                }
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
                            <button onClick={handleSubmit} type="submit">
                                {submitButtonLabel}
                            </button>
                        </FormItem>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AddRecipeFormik;
