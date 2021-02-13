import React from "react";

const AddRecipeNutrition = ({ values, ingredients }) => {
    let calories = 0;
    let proteins = 0;
    let fat = 0;
    let carbs = 0;

    values.ingredients.forEach((unit) => {
        const ingredient = ingredients.find(
            (ingredient) => ingredient.id === unit.id
        );
        const amount = unit.amount;

        calories += ingredient.calorie * amount * 0.01;
        proteins += ingredient.product_protein * amount * 0.01;
        fat += ingredient.product_fat * amount * 0.01;
        carbs += ingredient.product_carb * amount * 0.01;
    });

    return (
        <div>
            <p>Пищевая ценность</p>
            <p>Каллории: {calories.toFixed(3)}</p>
            <p>Белки: {proteins.toFixed(3)}</p>
            <p>Жиры: {fat.toFixed(3)}</p>
            <p>Углеводы: {carbs.toFixed(3)}</p>
        </div>
    );
};

export default AddRecipeNutrition;
