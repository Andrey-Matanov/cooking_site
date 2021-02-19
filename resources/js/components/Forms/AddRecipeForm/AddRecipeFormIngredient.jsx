import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";

const Error = styled.div`
    color: red;
`;

const AddRecipeFormIngredient = ({
    currentNumber,
    currentId,
    currentName,
    currentAmount,
    ingredients,
    errors,
    usedIngredients,
    setFieldValue,
    unitId,
    handleChange,
}) => {
    const getUnitName = (unitId) =>
        ["граммы", "миллилитры", "штуки", "ч.л.", "ст.л."][unitId - 1];

    useEffect(() => {
        if (ingredients.length) {
            console.log("Ingredient" + currentName + " - rerender");
        }
    });

    const Ingredient = ({ index, style }) => {
        const isCurrent = ingredients[index].id === currentId;
        const isDisabled =
            usedIngredients.some(
                (ingredient) => ingredient.id === ingredients[index].id
            ) && ingredients[index].id !== currentId;

        return (
            <button
                disabled={isDisabled}
                onClick={() =>
                    setFieldValue(
                        `ingredients[${currentNumber}].id`,
                        ingredients[index].id
                    )
                }
                type="button"
                style={{
                    ...style,
                    color: isCurrent
                        ? "green"
                        : isDisabled
                        ? "lightray"
                        : "black",
                }}
            >
                {ingredients[index].name}
            </button>
        );
    };

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
                    itemCount={ingredients.length}
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
                <Error>
                    {typeof errors === "object" && errors[currentNumber]
                        ? errors[currentNumber].amount
                        : null}
                </Error>
            </div>
            <button
                type="button"
                onClick={() => {
                    setFieldValue(
                        "ingredients",
                        [...usedIngredients].filter(
                            (ingredient) => ingredient.id !== currentId
                        )
                    );
                }}
            >
                Удалить текущий ингрендиент
            </button>
        </div>
    );
};

export default AddRecipeFormIngredient;
