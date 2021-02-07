import React from "react";

const AddRecipeFormIngredient = ({
    i,
    name,
    amount,
    ingredients,
    unitId,
    handleChange,
}) => {
    const getUnitName = (unitId) =>
        ["граммы", "миллилитры", "штуки", "ч.л.", "ст.л."][unitId - 1];

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
            }}
        >
            <select
                style={{ marginBottom: "10px" }}
                value={name}
                onChange={handleChange}
                name={`ingredients[${i}].name`}
            >
                {ingredients.map((ingredient) => (
                    <option key={ingredient.id} value={ingredient.name}>
                        {ingredient.name} {`(${getUnitName(unitId)})`}
                    </option>
                ))}
            </select>
            <div>
                <label htmlFor={`ingredient${i}_amount`}>Количество</label>
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
