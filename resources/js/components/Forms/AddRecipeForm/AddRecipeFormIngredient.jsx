import React, { useEffect } from "react";

import { FixedSizeList as List } from "react-window";
import ChooseFromListComponent from "./ChooseFromListComponent";

const AddRecipeFormIngredient = ({
    i,
    id,
    amount,
    ingredients,
    usedIngredients,
    unitId,
    handleChange,
    setFieldValue,
    setUsedIngredients,
}) => {
    const getUnitName = (unitId) =>
        ["граммы", "миллилитры", "штуки", "ч.л.", "ст.л."][unitId - 1];

    useEffect(() => console.log("addRecipeFormIngredients rerender"));

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
            }}
        >
            {/* <select
                style={{ marginBottom: "10px" }}
                value={id}
                onChange={(e) => {
                    setFieldValue(`ingredients[${i}].id`, +e.target.value);

                    const newUsedIngredients = [...usedIngredients];
                    const idIndex = newUsedIngredients.indexOf(id);
                    newUsedIngredients.splice(idIndex, 1, +e.target.value);
                    setUsedIngredients(newUsedIngredients);
                }}
                name={`ingredients[${i}].id`}
            >
                {ingredients
                    .filter(
                        (ingredient) =>
                            !usedIngredients.includes(ingredient.id) ||
                            ingredient.id === id
                    )
                    .map((ingredient) => (
                        <option key={ingredient.id} value={ingredient.id}>
                            {ingredient.name}
                        </option>
                    ))}
            </select> */}
            <ChooseFromListComponent
                id={id}
                list={ingredients.filter(
                    (ingredient) =>
                        ingredient.id === id ||
                        !usedIngredients.includes(ingredient.id)
                )}
                name={"ингредиент"}
                usedIngredients={usedIngredients}
                setFieldValue={setFieldValue}
                setUsedIngredients={setUsedIngredients}
            />
            <div>
                <label htmlFor={`ingredient${i}_amount`}>
                    Количество{`(${getUnitName(unitId)})`}
                </label>
                <input
                    id={`ingredient${i}_amount`}
                    type="number"
                    value={amount}
                    onChange={handleChange}
                    name={`ingredients[${i}].amount`}
                />
            </div>
        </div>
    );
};

export default AddRecipeFormIngredient;
