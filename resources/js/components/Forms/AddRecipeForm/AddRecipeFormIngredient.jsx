import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";

const AddRecipeFormIngredient = ({
    currentNumber,
    currentId,
    currentAmount,
    ingredients,
    usedIngredients,
    setFieldValue,
    unitId,
    handleChange,
}) => {
    const getUnitName = (unitId) =>
        ["граммы", "миллилитры", "штуки", "ч.л.", "ст.л."][unitId - 1];

    const currentName = ingredients.find(
        (ingredient) => ingredient.id === currentId
    ).name;

    const ingredientsList = ingredients.filter((ingredient) => {
        return (
            ingredient.id === currentId ||
            !usedIngredients.some(
                (usedIngredient) => usedIngredient.id === ingredient.id
            )
        );
    });

    useEffect(() => {
        if (ingredients.length) {
            console.log("Ingredient" + currentName + " - rerender");
        }
    });

    const Ingredient = ({ index, style }) => (
        <button
            onClick={() =>
                setFieldValue(
                    `ingredients[${currentNumber}].id`,
                    ingredientsList[index].id
                )
            }
            type="button"
            style={{
                ...style,
                color:
                    ingredientsList[index].name === currentName
                        ? "green"
                        : "black",
            }}
        >
            {ingredientsList[index].name}
        </button>
    );

    return (
        <div
            style={{
                marginBottom: "10px",
                padding: "10px",
                border: "2px solid black",
            }}
        >
            <div>
                <List
                    height={150}
                    itemCount={ingredientsList.length}
                    itemSize={35}
                    width={300}
                >
                    {Ingredient}
                </List>
            </div>
            <p>Выбранный ингредиент: {currentName}</p>
            <div>
                <label htmlFor={`ingredient${currentNumber}_amount`}>
                    Количество{`(${getUnitName(unitId)})`}
                </label>
                <input
                    id={`ingredient${currentNumber}_amount`}
                    type="number"
                    value={currentAmount}
                    onChange={handleChange}
                    name={`ingredients[${currentNumber}].amount`}
                />
            </div>
            <button
                type="button"
                onClick={() =>
                    setFieldValue(
                        "ingredients",
                        [...usedIngredients].filter(
                            (ingredient) => ingredient.id !== currentId
                        )
                    )
                }
            >
                Удалить текущий ингрендиент
            </button>
        </div>
    );
};

export default AddRecipeFormIngredient;
