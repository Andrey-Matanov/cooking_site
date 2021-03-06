import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { addRecipe, editRecipe, deleteRecipe } from "../../../actions/recipesListActions";
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
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
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
        name: Yup.string().required("Название не может быть пустым"),
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
        description: Yup.string().required("Описание не может быть пустым"),
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
                    case "delete": {
                        dispatch(deleteRecipe(additionalInfo.recipeId));
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
                handleBlur,
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
                    <Form style={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                            fullwidth="true"
                            id="name"
                            name="name"
                            label="Название рецепта"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        <FormControl>
                            <InputLabel id="category-label">
                                Категория
                            </InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                value={values.category_id}
                                name="category_id"
                                onChange={(e) =>
                                    setFieldValue(
                                        `category_id`,
                                        +e.target.value
                                    )
                                }
                            >
                                {categories.map((category) => (
                                    <MenuItem
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormItem>
                            <AddImageField
                                label="Изображение рецепта"
                                image={values.image}
                                formFieldName="image"
                                setFieldValue={setFieldValue}
                            />
                        </FormItem>

                        <TextField
                            fullwidth="true"
                            id="time"
                            name="time"
                            type="number"
                            label="Ориентировочное время приготовления рецепта"
                            value={values.time}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.time && Boolean(errors.time)}
                            helperText={touched.time && errors.time}
                        />

                        <FormControl>
                            <InputLabel id="difficulty-label">
                                Сложность приготовления
                            </InputLabel>
                            <Select
                                labelId="difficulty-label"
                                id="difficulty"
                                value={values.difficulty}
                                name="difficulty"
                                onChange={(e) =>
                                    setFieldValue(`difficulty`, +e.target.value)
                                }
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                                <MenuItem value="6">6</MenuItem>
                                <MenuItem value="7">7</MenuItem>
                                <MenuItem value="8">8</MenuItem>
                                <MenuItem value="9">9</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                            </Select>
                        </FormControl>

                        <Card variant="outlined" style={{ padding: "0 10px" }}>
                            <CardHeader
                                title="Состав рецепта"
                                style={{ textAlign: "center" }}
                            />
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
                                            touched={touched.ingredients}
                                            usedIngredients={values.ingredients}
                                            unitId={ingredient.unit_id}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
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
                            <Button
                                color="secondary"
                                variant="contained"
                                fullWidth={true}
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
                            </Button>
                        </Card>

                        {/* {ingredients.length && (
                        <AddRecipeNutrition
                            values={values}
                            ingredients={ingredients}
                        />
                    )} */}

                        <TextField
                            fullwidth="true"
                            id="description"
                            multiline={true}
                            name="description"
                            label="Описание рецепта"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                                touched.description &&
                                Boolean(errors.description)
                            }
                            helperText={
                                touched.description && errors.description
                            }
                        />

                        <Card
                            variant="outlined"
                            style={{ padding: "0 10px", marginBottom: "10px" }}
                        >
                            <CardHeader
                                title="Ход приготовления"
                                style={{ textAlign: "center" }}
                            />
                            {values.steps.map((step, i) => (
                                <AddRecipeFormStep
                                    key={i}
                                    index={i}
                                    name={step.name || step.heading}
                                    description={step.description}
                                    image={step.image}
                                    errors={errors.steps}
                                    touched={touched.steps}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
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

                            {errors.steps &&
                            touched.steps &&
                            typeof errors.steps === "string" ? (
                                <Error>{errors.steps}</Error>
                            ) : null}
                            <Button
                                color="secondary"
                                variant="contained"
                                fullWidth={true}
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
                            </Button>
                        </Card>
                        <ButtonGroup
                            orientation="vertical"
                            aria-label="vertical outlined button group"
                        >
                            <Button
                                color="secondary"
                                variant="contained"
                                type="button"
                                onClick={() => console.log(values)}
                            >
                                Show values
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={handleSubmit}
                                type="submit"
                            >
                                {submitButtonLabel}
                            </Button>
                        </ButtonGroup>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AddRecipeFormik;
