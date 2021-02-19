import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCategories } from "../actions/categoriesActions";
import { fetchIngredientsAndRecipes } from "../actions/combinedActions";
import { fetchIngredients } from "../actions/ingredientsAction";
import AddRecipeForm from "../components/Forms/AddRecipeForm/AddRecipeForm";

const Wrapper = styled.div`
    padding: 20px;
`;

const AddRecipe = ({ ingredients, categories }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!ingredients.length || !categories.length) {
            dispatch(fetchIngredientsAndRecipes());
        }
    }, []);

    return (
        <Wrapper>
            <h1>Добавить рецепт</h1>
            <AddRecipeForm ingredients={ingredients} categories={categories} />
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    categories: state.categories,
});

export default connect(mapStateToProps)(AddRecipe);
