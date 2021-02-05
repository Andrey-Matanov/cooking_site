import React from "react";
import { connect } from "react-redux";
import AddRecipeForm from "../components/Forms/AddRecipeForm/AddRecipeForm";

const AddRecipe = ({ recipesLength }) => {
    return (
        <div>
            <h1>Добавить рецепт</h1>
            <AddRecipeForm id={recipesLength + 1} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    recipesLength: state.recipesObject.recipes.length,
});

export default connect(mapStateToProps)(AddRecipe);
