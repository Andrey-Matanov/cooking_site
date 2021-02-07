import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AddRecipeForm from "../components/Forms/AddRecipeForm/AddRecipeForm";

const Wrapper = styled.div`
    padding: 20px;
`;

const AddRecipe = ({ ingredients, categories }) => {
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
