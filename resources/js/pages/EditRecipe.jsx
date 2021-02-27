import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchIngredientsAndRecipes } from "../actions/combinedActions";
import { fetchRecipe } from "../actions/recipeActions";
import { fetchUnits } from "../actions/unitsActions";
import AddRecipeForm from "../components/Forms/AddRecipeForm/AddRecipeForm";

const Wrapper = styled.div`
    padding: 20px;
`;

const EditRecipe = ({ ingredients, categories }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipe);
    const userId = useSelector((state) => state.authorization.userId);
    const units = useSelector((state) => state.units);

    const isRecipeOfUser = recipe.recipe.user_id === userId;

    const initialValues =
        categories.length && ingredients.length && recipe
            ? {
                  name: recipe.recipe.name,
                  image: recipe.recipe.image,
                  category_id: categories.find(
                      (category) => category.name === recipe.recipe.catalog_name
                  ).id,
                  time: recipe.recipe.time,
                  difficulty: recipe.recipe.complexity,
                  ingredients: recipe.ingredients.map((ingredient) => ({
                      id: ingredient.id,
                      name: ingredient.name,
                      amount: ingredient.amount,
                      unit_id: ingredient.units_id,
                  })),
                  description: recipe.recipe.description,
                  steps: recipe.steps.map((step) => ({
                      name: step.name,
                      description: step.description,
                      image: step.image,
                  })),
              }
            : {};

    useEffect(() => {
        dispatch(fetchRecipe(id));

        if (!units.length) {
            dispatch(fetchUnits());
        }

        if (!ingredients.length || !categories.length) {
            dispatch(fetchIngredientsAndRecipes());
        }
    }, []);

    if (
        ingredients.length &&
        categories.length &&
        units.length &&
        initialValues
    ) {
        switch (recipe.status) {
            case "ok": {
                return (
                    <Wrapper>
                        <h1>Редактирование рецепта</h1>
                        {isRecipeOfUser ? (
                            <AddRecipeForm
                                ingredients={ingredients}
                                categories={categories}
                                units={units}
                                formInitialValues={initialValues}
                                submitButtonLabel="Обновить рецепт"
                                additionalInfo={{
                                    type: "edit",
                                    recipeId: id,
                                }}
                            />
                        ) : (
                            <div>Вы не можете редактировать чужой рецепт</div>
                        )}
                    </Wrapper>
                );
            }
            case "failed": {
                return <h2>Такого рецепта не существует</h2>;
            }
        }
    } else {
        return <h2>Загрузка</h2>;
    }
};

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    categories: state.categories,
});

export default connect(mapStateToProps)(EditRecipe);
