import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
import { addRecipe } from "../../actions/recipesListActions";
import { updateUserRecipesIds } from "../../actions/usersActions";
import { fetchIngredients } from "../../actions/ingredientsAction";

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

const AddRecipeFormik = ({ ingredients, id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            name: "",
            time: 0,
            difficulty: "1",
            description: "",
        },
        onSubmit: ({ name, time, difficulty, description }) => {
            const newRecipeId = "" + id;
            const newRecipe = {
                newRecipeId,
                name,
                time,
                difficulty,
                description,
            };

            dispatch(updateUserRecipesIds(newRecipeId));
            dispatch(addRecipe(newRecipe));
        },
    });

    console.log(ingredients);

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
                <label htmlFor="ingredients">Состав рецепта</label>
                <select>
                    {ingredients.map((ingredient) => (
                        <option key={ingredient.id} value={ingredient.name}>
                            {ingredient.name}
                        </option>
                    ))}
                </select>
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
                <button type="submit">Добавить рецепт</button>
            </FormItem>
        </AddRecipeForm>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
});

export default connect(mapStateToProps)(AddRecipeFormik);
